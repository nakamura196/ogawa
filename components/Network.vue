<template>
  <network
    id="mynetwork"
    ref="network"
    class="mt-5"
    style="width: 100%; height: 650px; background-color: lightyellow"
    :nodes="nodes"
    :edges="edges"
    :options="options"
    @click="onNodeSelected"
  >
  </network>
</template>

<script>
import { Network } from 'vue-visjs'

const combination = (nums, k) => {
  const ans = []
  if (nums.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]]
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      const row = combination(nums.slice(i + 1), k - 1)
      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]))
      }
    }
  }
  return ans
}
export default {
  components: {
    network: Network,
  },
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      nodes: [],
      nodesMap: {},
      edges: [],
      options: {
        nodes: {
          borderWidth: 1,
        },
        edges: {
          color: 'lightgray',
        },
      },
    }
  },
  computed: {},
  mounted() {
    this.getRelations()
  },
  methods: {
    // pleiadesから緯度・経度情報の取得
    async getRelations() {
      const item = this.item

      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      SELECT DISTINCT *
      WHERE {
        ?entityReference ex:referencesEntityInContext ?entityInContext .
        filter (?entityInContext = <${item.s}>) .
        ?factoid ?hasReference ?entityReference .
        ?hasReference rdfs:subPropertyOf* ?propertyClass .
        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).
        ?factoid ?hasReference2 ?entityReference2 .
        filter (?entityReference != ?entityReference2)
        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .
        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .
        optional { ?entityReference2 ex:referencesEntityInContext ?entityInContext2 . ?entityInContext2 rdf:type ?typeOfEntityInContext }
        ?entity ex:name ?name .
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const relationsByFactoid = {}

      // 各Entityの情報を保存するマップ
      const entities = {}

      // 起点となる人の情報を入れておく
      entities[item.s] = item

      const edgesMap = {}
      const nodesMap = {}

      for (const relation of data) {
        const factoid = relation.factoid
        if (!relationsByFactoid[factoid]) {
          relationsByFactoid[factoid] = [item.s]
        }
        const relationByFactoid = relationsByFactoid[factoid]
        const entityUri = relation.entityInContext2 || relation.entity
        if (!relationByFactoid.includes(entityUri)) {
          relationByFactoid.push(entityUri)
        }
        entities[entityUri] = relation

        if (relation.entityInContext2) {
          const edgeId = relation.entityInContext2 + ' - ' + relation.entity
          if (!edgesMap[edgeId]) {
            edgesMap[edgeId] = {
              from: relation.entityInContext2,
              to: relation.entity,
            }
          }

          if (!nodesMap[relation.entity]) {
            nodesMap[relation.entity] = {
              id: relation.entity,
              label: relation.name,
              color: 'green',
              shape: 'diamond',
            }
          }
        }
      }

      for (const factoid in relationsByFactoid) {
        const relationByFactoid = relationsByFactoid[factoid]
        const combis = combination(relationByFactoid, 2)

        for (const combi of combis) {
          const edgeId = combi[0] + '-' + combi[1]

          if (!edgesMap[edgeId]) {
            edgesMap[edgeId] = {
              from: combi[0],
              to: combi[1],
              value: 0,
            }
          }

          edgesMap[edgeId].value += 1

          for (const entityUri of combi) {
            let color = null
            let shape = null
            let nodeType = null
            const typeOfEntityReference =
              entities[entityUri].typeOfEntityReference
            const typeOfEntityInContext =
              entities[entityUri].typeOfEntityInContext
            if (
              [
                'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference',
                'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference',
              ].includes(typeOfEntityReference)
            ) {
              color = 'yellow'
              shape = 'diamond'
            } else if (
              [
                'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#CommunityInContext',
              ].includes(typeOfEntityInContext)
            ) {
              color = 'red'
              shape = 'square'
              nodeType = typeOfEntityInContext
            } else if (
              [
                'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PersonInContext',
              ].includes(typeOfEntityInContext)
            ) {
              nodeType = typeOfEntityInContext
            }

            if (!nodesMap[entityUri]) {
              nodesMap[entityUri] = {
                id: entityUri,
                label: entities[entityUri].name, // ,
                color,
                shape,
                type: nodeType,
              }
            }
          }
        }
      }

      // ノードとエッジ
      const nodes = []
      const edges = []

      for (const nodeId in nodesMap) {
        nodes.push(nodesMap[nodeId])
      }

      for (const edgeId in edgesMap) {
        edges.push(edgesMap[edgeId])
      }

      this.nodes = nodes
      this.edges = edges

      this.nodesMap = nodesMap

      this.relations = data
    },

    onNodeSelected(value) {
      const nodes = value.nodes
      if (nodes.length > 0) {
        const uri = nodes[0]
        const node = this.nodesMap[uri]
        if (
          node.type ===
          'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#CommunityInContext'
        ) {
          alert('今後対応予定')
        } else if (
          node.type ===
          'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PersonInContext'
        ) {
          const id = this.$utils.getIdFromUri(uri)
          this.$router.push(
            this.localePath({
              name: 'pers-id',
              params: {
                id,
              },
            })
          )
        }
      }
    },
  },
}
</script>
