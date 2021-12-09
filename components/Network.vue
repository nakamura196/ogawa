<template>
  <div>
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

    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Contexts </v-card-title>
        <v-card-text>
          <ul>
            <li
              v-for="(context, key) in selectedContexts"
              :key="key"
              class="mt-4"
            >
              <nuxt-link
                :to="
                  localePath({
                    name: 'entity-id',
                    params: {
                      id: $utils.getIdFromUri(key),
                    },
                  })
                "
                >{{ context.descriptionOfEntityInContext2 }}</nuxt-link
              >
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      contexts: {},
      dialog: false,
      selectedContexts: {},
    }
  },
  computed: {},
  mounted() {
    this.getRelations()
  },
  methods: {
    // pleiadesから緯度・経度情報の取得
    async getRelations() {
      // 起点となっているノード
      const item = this.item

      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      SELECT DISTINCT *
      WHERE {
        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity . 
        filter (?entityInContext = <${item.s}>) .
        ?factoid ?hasReference ?entityReference .
        ?hasReference rdfs:subPropertyOf* ?propertyClass .
        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).
        ?factoid ?hasReference2 ?entityReference2 .
        filter (?entityReference != ?entityReference2)
        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .
        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .
        optional { 
          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 . 
          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }
        ?entity ex:name ?name; rdf:type ?typeOfEntity2 . 
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

      // entityとentityInContextの関係を保持
      const contexts = {}
      this.contexts = contexts

      for (const relation of data) {
        const factoid = relation.factoid
        if (!relationsByFactoid[factoid]) {
          relationsByFactoid[factoid] = [item.s]
        }
        const relationByFactoid = relationsByFactoid[factoid]

        // 起点のノードとentityのつなぐ（entityInContextをつないでいたものから修正）
        const entityUri = /* relation.entityInContext2 || */ relation.entity
        if (!relationByFactoid.includes(entityUri)) {
          relationByFactoid.push(entityUri)
        }
        entities[entityUri] = relation

        // entityInContextとentityの繋いでいる
        if (relation.entityInContext2) {
          const entityInContextUri = relation.entityInContext2
          if (!contexts[entityUri]) {
            contexts[entityUri] = {}
          }
          contexts[entityUri][entityInContextUri] = relation
          /*
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
          */
        }
      }

      for (const factoid in relationsByFactoid) {
        const relationByFactoid = relationsByFactoid[factoid]
        // 組み合わせを取得
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

            let typeOfEntity1And2 = ''

            // 起点となるノードだったら
            if (entityUri === item.s) {
              typeOfEntity1And2 = entities[entityUri].typeOfEntity
            } else {
              typeOfEntity1And2 = entities[entityUri].typeOfEntity2
            }

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
                'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community',
              ].includes(typeOfEntity1And2)
            ) {
              color = 'red'
              shape = 'square'
              nodeType = typeOfEntity1And2
            } else if (
              // Person
              [
                'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person',
              ].includes(typeOfEntity1And2)
            ) {
              nodeType = typeOfEntity1And2
            } else if (
              // Location
              [
                'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location',
              ].includes(typeOfEntity1And2)
            ) {
              color = '#98fb98' //'green'
              nodeType = typeOfEntity1And2
            } else if (
              // Group
              [
                'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group',
              ].includes(typeOfEntity1And2)
            ) {
              color = 'orange' // '#E65100' // orange
              nodeType = typeOfEntity1And2
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

    // クリックした時の処理
    onNodeSelected(value) {
      const nodes = value.nodes
      if (nodes.length > 0) {
        const uri = nodes[0]
        const node = this.nodesMap[uri]
        if (
          [
            'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person',
            'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location',
            'https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group',
            'https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community',
          ].includes(node.type)
        ) {
          this.dialog = true

          this.selectedContexts = this.contexts[node.id]
        }
      }
    },
  },
}
</script>
