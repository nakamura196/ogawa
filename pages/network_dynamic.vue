<template>
  <v-container fluid>
    <h2>{{ title }}</h2>

    <network
      id="mynetwork"
      ref="network"
      class="mt-5"
      style="width: 100%; height: 650px"
      :nodes="nodes"
      :edges="edges"
      :options="options"
    >
    </network>
  </v-container>
</template>
<script>
import { Network } from 'vue-visjs'

export default {
  components: {
    network: Network,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      loading: false,
      nodes: [],
      edges: [],
      options: {
        nodes: {
          borderWidth: 1,
        },
        edges: {
          color: 'lightgray',
        },
      },
      title: this.$t('network'),
    }
  },

  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.loading = true
      const url = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query4Person = `
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      select * where {
        ?p a ?type;
          ex:eventSince ?since;
          ex:eventUntil ?until .
        filter(?type = ex:PersonInContext || ?type = ex:CommunityInContext)
      }`

      const data4Person = (
        await this.$axios.get(
          `${url}?query=${encodeURIComponent(query4Person)}`
        )
      ).data

      const endpoint4hutimeperiod =
        'https://dydra.com/junjun7613/hutimeperiod/sparql'

      const query4Fact = `
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      prefix ex2: <http://www.example.com/roman-ontology/resource/fact/>
      select distinct * where {
         ex2:fact_1 (ex:mentionedAsPrecedent|ex:therefore)* ?s .
         optional {
          ?s ex:when ?when_s .
          SERVICE SILENT <${endpoint4hutimeperiod}> {
            optional { ?when_s ex:begin ?when_s_begin; ex:end ?when_s_end. }
          }
         }
         ?s (ex:mentionedAsPrecedent|ex:therefore) ?o .
         optional {
           ?o ex:when ?when_o .
           SERVICE SILENT <${endpoint4hutimeperiod}> {
            optional { ?when_o ex:begin ?when_o_begin; ex:end ?when_o_end. }
           }
         }
         ?o (ex:mentionedAsPrecedent|ex:therefore)* ex2:fact_40 .
      }`

      const data4Fact = (
        await this.$axios.get(`${url}?query=${encodeURIComponent(query4Fact)}`)
      ).data

      console.log({ data4Person, data4Fact })

      const edges = []
      const existsNodes = {}
      const nodes = []

      // factNodesの取り扱い
      handleFactNodes(nodes, edges, data4Fact, existsNodes)

      // contextNodesの取り扱い
      handleContextNodes(nodes, edges, data4Person, existsNodes)

      // inとoutが同じ（重なってしまう）factNodeの位置を調整する
      arrangeNodesY(existsNodes)

      this.nodes = nodes
      this.edges = edges
      this.loading = false
    },
  },
}

function getLabelFromUri(uri) {
  const spl = uri.split('/')
  return spl[spl.length - 1]
}

function handleFactNodes(nodes, edges, data4Fact, existsNodes) {
  const step4factNode = 200
  const keys = ['s', 'o']
  for (const obj of data4Fact) {
    for (const key of keys) {
      const uri = obj[key]

      const label = getLabelFromUri(uri)
      if (!existsNodes[uri]) {
        const x = nodes.length * step4factNode
        const factNode = {
          id: uri,
          label,
          x,
          y: 0,
          // fixed: true,
          physics: false,
          shape: 'box',
          color: '#F44336',
          in: [], // 当該Nodeに入っているNodes。重なってしまうことへの対応用。
          out: [], // 当該Nodeから出ていくNodes。重なってしまうことへの対応用。
        }
        nodes.push(factNode)

        handleDateNode(nodes, edges, obj, key, existsNodes, x)

        existsNodes[uri] = factNode
      }
    }

    const from = obj.s
    const to = obj.o

    edges.push({
      from,
      to,
      arrows: {
        to: {
          enabled: true,
        },
      },
    })

    // fromNodeから出ていくNodes
    const fromOutNodes = existsNodes[from].out
    if (!fromOutNodes.includes(to)) {
      fromOutNodes.push(to)
    }

    // toNodeに入っていくNodes
    const toInNodes = existsNodes[to].in
    if (!toInNodes.includes(from)) {
      toInNodes.push(from)
    }
  }
}

function handleDateNode(nodes, edges, obj, key, existsNodes, x) {
  const step4y = 100

  // when情報を持つ場合
  if (obj['when_' + key]) {
    const uriWhen = obj['when_' + key]
    const labelWhen = obj['when_' + key + '_begin']

    if (!existsNodes[uriWhen]) {
      const whenNode = {
        id: uriWhen,
        label: labelWhen,
        x, // factNodeと同じx座標
        y: -1 * step4y, // factNodeの上側（-100 y座標）
        // fixed: true,
        physics: false,
        shape: 'box',
        color: '#4CAF50',
      }
      nodes.push(whenNode)

      existsNodes[uriWhen] = whenNode
    }

    // factNodeとdateNodeを繋ぐ
    edges.push({
      from: obj[key],
      to: uriWhen,
      arrows: {
        to: {
          enabled: true,
        },
      },
    })
  }
}

function handleContextNodes(nodes, edges, data4Person, existsNodes) {
  // x座標ごとのcontextNodeを格納する
  const contextXList = {}

  const step4y = 100

  for (const obj of data4Person) {
    const sinceUri = obj.since
    const untilUri = obj.until

    // 始点と終点がfactNodesにあるものだけを扱う
    // SPARQLクエリで制御する方法もありかも
    if (!existsNodes[sinceUri] || !existsNodes[untilUri]) {
      continue
    }

    const uri = obj.p
    const label = getLabelFromUri(uri)

    const sinceNode = existsNodes[sinceUri]
    const untilNode = existsNodes[untilUri]

    // sinceとuntilの中間
    const contextX = (sinceNode.x + untilNode.x) / 2

    if (!contextXList[contextX]) {
      contextXList[contextX] = []
    }

    const contextNode = {
      id: uri,
      label,
      x: contextX,
      y: step4y * (contextXList[contextX].length + 1), // 同じx座標の場合、yにずらす
      // fixed: true,
      physics: false,
      shape: 'box',
      color: label.includes('pers') ? '#2196F3' : '#9C27B0',
    }

    contextXList[contextX].push(contextNode)

    nodes.push(contextNode)

    // 始点ノードへのリンク
    edges.push({
      from: uri,
      to: sinceUri,
      arrows: {
        to: {
          enabled: true,
        },
      },
    })

    // 終点ノードへのリンク
    edges.push({
      from: uri,
      to: untilUri,
      arrows: {
        to: {
          enabled: true,
        },
      },
    })
  }
}

function arrangeNodesY(existsNodes) {
  const step4y = 30
  const inOutIdMap = {}

  for (const nodeUri in existsNodes) {
    const node = existsNodes[nodeUri]
    if (node.in && node.out) {
      for (const uriIn of node.in) {
        for (const uriOut of node.out) {
          // in と out が同じものを集計する
          const inOutId = uriIn + ' - ' + uriOut
          if (!inOutIdMap[inOutId]) {
            inOutIdMap[inOutId] = []
          }

          node.y -= step4y * inOutIdMap[inOutId].length

          inOutIdMap[inOutId].push(nodeUri)
        }
      }
    }
  }
}
</script>
<style>
#mynetwork {
  border: 1px solid lightgray;
}
</style>
