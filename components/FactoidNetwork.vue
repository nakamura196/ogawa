<template>
  <div>
    <network
      id="mynetwork"
      ref="network"
      class="mt-5"
      style="width: 100%; height: 500px; background-color: lightyellow"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      @click="onNodeSelected"
    >
    </network>

    <div class="my-4">
      <v-switch v-model="isLemma" :label="`Lemma`"></v-switch>
    </div>

    <div class="mt-4">
      <v-btn small class="ma-1" @click="hierarchical = false"
        >hierarchicalを使用しない</v-btn
      >
      <v-btn small class="ma-1" @click="hierarchical = true"
        >hierarchicalを使用する</v-btn
      >

      <v-btn small class="ma-1" @click="sortMethod = 'directed'"
        >directed</v-btn
      >
      <v-btn small class="ma-1" @click="sortMethod = 'hubsize'">hubsize</v-btn>

      <v-btn small class="ma-1" @click="physicsEnabled = true"
        >physicsを使用する</v-btn
      >
      <v-btn small class="ma-1" @click="physicsEnabled = false"
        >physicsを使用しない</v-btn
      >
    </div>
  </div>
</template>

<script>
import { Network } from 'vue-visjs'

export default {
  components: {
    network: Network,
  },
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      isLemma: true,
      sortMethod: 'directed',
      hierarchical: false,
      physicsEnabled: true,
      orgNodes: [],
      orgEdges: [],

      nodes: [],
      edges: [],
      nodesMap: {},
    }
  },
  computed: {
    options() {
      const hierarchical = this.hierarchical
      let hierarchicalOption = false
      if (hierarchical) {
        hierarchicalOption = {
          sortMethod: this.sortMethod,
        }
      }

      const option = {
        edges: {
          length: 400, // Longer edges between nodes.
        },
        layout: {
          randomSeed: 2,
          hierarchical: hierarchicalOption,
        },
        physics: {
          enabled: this.physicsEnabled,
          // Even though it's disabled the options still apply to network.stabilize().
          /*
          enabled: false,
          solver: 'repulsion',
          repulsion: {
            nodeDistance: 4000, // Put more distance between the nodes.
          },
          */
        },
      }

      return option
    },
  },
  watch: {
    isLemma() {
      this.drawNetwork()
    },
    id() {
      this.getRelatedFactoids()
    },
  },
  mounted() {
    this.getRelatedFactoids()
  },
  methods: {
    async getRelatedFactoids() {
      // const item = this.item
      const factoidUri = this.id

      const endpoint = process.env.endpoint // 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT * WHERE {
        ?s ex:description ?desc_s .
        OPTIONAL {
          ?s ?related_so ?s_o .
          {
            ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .
          }
          UNION
          {
            ?s_o ex:referencesEntity ?referencesEntity_s .
          }
          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s
        }
        OPTIONAL {
          ?s ?p ?o .
          ?o a/rdfs:subClassOf* ex:Factoid .
          ?o ex:description ?desc_o .
          OPTIONAL {
            ?o ?related_oo ?o_o .
            {
              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .
            }
            UNION
            {
              ?o_o ex:referencesEntity ?referencesEntity_o .
            }
            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o
          }
        }
        filter (?s = <${factoidUri}> || ?o = <${factoidUri}>)
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      let nodesMap = {}
      let edgesMap = {}

      for (const obj of data) {
        const keys = ['s', 'o']
        for (const key of keys) {
          // entity
          const entityNodeUri = obj[`referencesEntity_${key}`]

          if (!entityNodeUri) {
            continue
          }

          const nodeUri = obj[key]

          const rna = obj[`desc_${key}`]
          const cdn2 = []
          const size = 20
          for (let i = 0; i < rna.length / size; i++) {
            cdn2.push(rna.substr(i * size, size))
          }

          if (!nodesMap[nodeUri]) {
            nodesMap[nodeUri] = {
              id: nodeUri,
              label: cdn2.join('\n'),
              shape: 'box',
              color: {
                background: 'white',
              },
              type: 'factoid',
            }
          }

          if (!nodesMap[entityNodeUri]) {
            let color = null
            let shape = null
            const entityType = obj[`referencesEntityType_${key}`]
            switch (entityType) {
              case 'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location':
                // 式の結果が value1 に一致する場合に実行する文
                color = '#98fb98' // 'green'
                break
              case 'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'red'
                shape = 'square'
                break
              /*
              case 'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'yellow'
                shape = 'diamond'
                break
              case 'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'yellow'
                shape = 'diamond'
                break
              */
              case 'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObject':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'yellow'
                shape = 'diamond'
                break
              case 'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObject':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'yellow'
                shape = 'diamond'
                break
              case 'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group':
                // 式の結果が value1 に一致する場合に実行する文
                color = 'orange'
                break
              /*
              case value2:
                // 式の結果が value2 に一致する場合に実行する文
                [break;]
              ...
              case valueN:
                // 式の結果が valueN に一致する場合に実行する文
                [break;]
              [default:
                // 式の値に一致するものが存在しない場合に実行する文
                [break;]]
              */
            }
            nodesMap[entityNodeUri] = {
              id: entityNodeUri,
              label: obj[`referencesEntityName_${key}`],
              // shape: 'box',
              color,
              shape,
              // context: obj[`entityInContext_${key}`],
              type: entityType,
            }
          }

          // [注意] nodesMapに登録済みのnodeについて、contextがnullの場合、当該node URIが2回目以降の出現であっても、登録済みのnodeのcontextを更新する。
          const nodeObj = nodesMap[entityNodeUri]
          if (!nodeObj.context && obj[`entityInContext_${key}`]) {
            nodeObj.context = obj[`entityInContext_${key}`]
          }

          // factoid と entity をつなぐ edge
          const edgeUri4f2e = `${nodeUri}-${entityNodeUri}`
          edgesMap[edgeUri4f2e] = {
            from: nodeUri,
            to: entityNodeUri,
            // label: this.$utils.getIdFromUri(obj.p, '#'),
            arrows: 'to',
            // font: { align: 'middle' },
            color: 'gray',
          }
        }

        if (
          obj.p &&
          ![
            'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#mentionedAsFollow',
          ].includes(obj.p)
        ) {
          edgesMap[`${obj.s}-${obj.o}`] = {
            from: obj.s,
            to: obj.o,
            label: this.$utils.getIdFromUri(obj.p, '#'),
            arrows: 'to',
            // font: { align: 'middle' },
            color: 'gray',
          }
        }
      }

      // objectの情報の追加
      const res = await this.getAssociatedObjects(nodesMap, edgesMap)
      nodesMap = res.nodesMap
      edgesMap = res.edgesMap

      // 以下、表示

      const nodes = []
      for (const nodeUri in nodesMap) {
        nodes.push(nodesMap[nodeUri])
      }

      const edges = []
      for (const edgeUri in edgesMap) {
        edges.push(edgesMap[edgeUri])
      }

      // 全データの格納
      this.orgEdges = edges
      this.orgNodes = nodes

      this.nodesMap = nodesMap

      // 描画
      this.drawNetwork()
    },

    drawNetwork() {
      // 全データ
      const orgEdges = this.orgEdges
      const orgNodes = this.orgNodes

      // 表示するものだけ
      const nodes = []
      const edges = []
      const nodesUris = []

      // 表示条件
      const isLemma = this.isLemma

      // ノードについて
      for (const node of orgNodes) {
        if (!isLemma && node.type === 'lemma') {
          continue
        }

        nodes.push(node)
        nodesUris.push(node.id)
      }

      // エッジについて
      for (const edge of orgEdges) {
        const fromUri = edge.from
        const toUri = edge.to
        if (nodesUris.includes(fromUri) && nodesUris.includes(toUri)) {
          edges.push(edge)
        }
      }

      this.nodes = nodes
      this.edges = edges
    },

    async getAssociatedObjects(nodesMap, edgesMap) {
      const filters = []
      for (const nodeUri in nodesMap) {
        if (nodesMap[nodeUri].type === 'factoid') {
          filters.push(`?s = <${nodeUri}>`)
        }
      }

      const filter = filters.join(' || ')

      const endpoint = process.env.endpoint // 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT * WHERE {
        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma .
        filter (${filter})
        SERVICE SILENT <https://dydra.com/i2k/lemmabank/sparql> {
          ?lemma rdfs:label ?label .
        }
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const factoidUri2labels = {}

      for (const item of data) {
        const label = item.label
        const aoUri = item.ao
        const factoidUri = item.s

        if (!factoidUri2labels[factoidUri]) {
          factoidUri2labels[factoidUri] = {}
        }

        if (!factoidUri2labels[factoidUri][aoUri]) {
          factoidUri2labels[factoidUri][aoUri] = []
        }

        if (!factoidUri2labels[factoidUri][aoUri].includes(label)) {
          factoidUri2labels[factoidUri][aoUri].push(label)
        }

        /*
        const label = item.label
        const factoidUri = item.s
        const aoUri = item.ao

        if (!nodesMap[label]) {
          nodesMap[label] = {
            id: label,
            label,
            // shape: 'box',
            color: 'pink',
            shape: 'box',
            // context: obj[`entityInContext_${key}`],
            type: 'lemma',
          }
        }

        if (!nodesMap[aoUri]) {
          nodesMap[aoUri] = {
            id: aoUri,
            label: '',
            // shape: 'box',
            color: 'yellow',
            shape: 'box',
            // context: obj[`entityInContext_${key}`],
            type: 'ao',
          }
        }

        edgesMap[`${factoidUri}-${aoUri}`] = {
          from: factoidUri,
          to: aoUri,
          // label: this.$utils.getIdFromUri(obj.p, '#'),
          arrows: 'to',
          // font: { align: 'middle' },
          color: 'gray',
        }

        edgesMap[`${aoUri}-${label}`] = {
          from: aoUri,
          to: label,
          // label: this.$utils.getIdFromUri(obj.p, '#'),
          arrows: 'to',
          // font: { align: 'middle' },
          color: 'gray',
        }
        */
      }

      for (const factoidUri in factoidUri2labels) {
        for (const aoUri in factoidUri2labels[factoidUri]) {
          const labels = factoidUri2labels[factoidUri][aoUri]
          labels.sort()
          const label = labels.join(' / ')

          if (!nodesMap[label]) {
            nodesMap[label] = {
              id: label,
              label,
              // shape: 'box',
              color: 'pink',
              shape: 'box',
              // context: obj[`entityInContext_${key}`],
              type: 'lemma',
            }
          }

          edgesMap[`${factoidUri}-${label}`] = {
            from: factoidUri,
            to: label,
            // label: this.$utils.getIdFromUri(obj.p, '#'),
            arrows: 'to',
            // font: { align: 'middle' },
            color: 'gray',
          }
        }
      }

      return { nodesMap, edgesMap }
    },

    // クリックした時の処理
    onNodeSelected(value) {
      const nodes = value.nodes

      if (nodes.length > 0) {
        const uri = nodes[0]
        const node = this.nodesMap[uri]

        if (node.type === 'factoid') {
          this.$router.push(
            this.localePath({
              name: 'item-id',
              params: {
                id: this.$utils.getIdFromUri(node.id).replace('fact_', ''),
              },
            })
          )
        } else {
          if (!node.context) {
            alert('contextがありません。')
            return
          }
          this.$router.push(
            this.localePath({
              name: 'entity-id',
              params: {
                id: this.$utils.getIdFromUri(node.context),
              },
            })
          )
        }
      }
    },
  },
}
</script>
