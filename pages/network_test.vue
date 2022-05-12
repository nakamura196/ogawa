<template>
  <v-container fluid>
    <network v-if="nodes.length > 0"
      ref="network"
      class="mt-5"
      style="width: 100%; height: 500px; border: 1px solid lightgray;"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      @click="neighbourhoodHighlight"
    >
    </network>
  </v-container>
</template>
<script>
import { Network } from 'vue-visjs'


let highlightActive = false;
export default {
  components: {
    network: Network,
  },
  data() {
    return {
      nodes: [],
      edges: [],
      nodesMap: {},
      edgesMap: {},
      options: {
      }
    }
  },
   async mounted() {
      const query = `PREFIX ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
        SELECT * WHERE {
          ?s ?v ?o; ex:description ?desc_s . 
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
          ?o ex:description ?desc_o .
          filter (?v = ex:mentionedAsPrecedent || ?v = ex:mentionedAsParallel || ?v = ex:hasContent)

          OPTIONAL {
            ?o ?related_oo ?o_o .
            {
              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .
            }
            UNION
            {
              ?o_o ex:referencesEntity ?referencesEntity_o .
            }
            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o . 
          }
        }`

      const endpoint = process.env.endpoint

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      console.log({data})

      const nodesMap = {}
      const edgesMap = {}

      for (const obj of data) {
        const keys = ['s', 'o']
        for (const key of keys) {
          const node = obj[key]
          // factoid
          if (!nodesMap[node]) {
            nodesMap[node] = {
              id: node,
              label: obj[`desc_${key}`],
              shape: 'dot',
              color: "orange",
              original_color: "orange"
            }
          }

          // referencesEntity
          const referencesEntityNode = obj[`referencesEntity_${key}`]
          if (!nodesMap[referencesEntityNode]) {
            nodesMap[referencesEntityNode] = {
              id: referencesEntityNode,
              label: obj[`referencesEntityName_${key}`],
              shape: 'dot',
              color: "pink",
              original_color: "pink"
            }
          }

          // factoidとreferencesEntity間のエッジ
          const edge4referencesEntity = `${node}-${referencesEntityNode}`
          edgesMap[edge4referencesEntity] = {
            from: node,
            to: referencesEntityNode,
            // color: "blue",
            arrows: {
              to: {
                enabled: true,
                type: 'arrow'
              }
            }
          }
        }      

        const nodeS = obj.s
        const nodeO = obj.o

        // factoid間のエッジ
        const edge = `${nodeS}-${nodeO}`
    
        edgesMap[edge] = {
          from: nodeS,
          to: nodeO,
          
          arrows: {
            to: {
              enabled: true,
              type: 'arrow'
            }
          }
        }

        

        

      }


      this.nodesMap = nodesMap
      this.edgesMap = edgesMap

      const nodes = []
      const edges = []

      for (const node in nodesMap) {
        nodes.push(nodesMap[node])
      }

      for (const edge in edgesMap) {
        edges.push(edgesMap[edge])
      }
      
      this.nodes = nodes
      this.edges = edges
   },
   methods: {
    neighbourhoodHighlight(params){

      const allNodes = JSON.parse(JSON.stringify(this.nodesMap))

      const network = this.$refs.network

      if (params.nodes.length > 0) {
          highlightActive = true;
          let i, j;
          const selectedNode = params.nodes[0];
          const degrees = 2;

          // mark all nodes as hard to read.
          for (const nodeId in allNodes) {
            allNodes[nodeId].color = "rgba(200,200,200,0.5)";
            if (allNodes[nodeId].hiddenLabel === undefined) {
              allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
              allNodes[nodeId].label = undefined;
            }
          }

          const connectedNodes = network.getConnectedNodes(selectedNode);

          let allConnectedNodes = [];

          // get the second degree nodes
          for (i = 1; i < degrees; i++) {
            for (j = 0; j < connectedNodes.length; j++) {
              allConnectedNodes = allConnectedNodes.concat(
                network.getConnectedNodes(connectedNodes[j])
              );
            }
          }

          // all second degree nodes get a different color and their label back
          for (i = 0; i < allConnectedNodes.length; i++) {
            allNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
            if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
              allNodes[allConnectedNodes[i]].label =
                allNodes[allConnectedNodes[i]].hiddenLabel;
              allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
            }
          }

          // all first degree nodes get their own color and their label back
          for (i = 0; i < connectedNodes.length; i++) {
            allNodes[connectedNodes[i]].color = allNodes[connectedNodes[i]].original_color;
            if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
              allNodes[connectedNodes[i]].label =
                allNodes[connectedNodes[i]].hiddenLabel;
              allNodes[connectedNodes[i]].hiddenLabel = undefined;
            }
          }

          // the main node gets its own color and its label back.
          allNodes[selectedNode].color = allNodes[selectedNode].original_color;
          if (allNodes[selectedNode].hiddenLabel !== undefined) {
            allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
            allNodes[selectedNode].hiddenLabel = undefined;
          }
        } else if (highlightActive === true) {
          // reset all nodes
          for (const nodeId in allNodes) {
            allNodes[nodeId].color = allNodes[nodeId].original_color;
            if (allNodes[nodeId].hiddenLabel !== undefined) {
              allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
              allNodes[nodeId].hiddenLabel = undefined;
            }
          }
          highlightActive = false;  
        }

        // transform the object into an array
        const updateArray = [];
        for (const nodeId in allNodes) {
          if (allNodes[nodeId]) {
            updateArray.push(allNodes[nodeId]);
          }
        }
        this.nodes = updateArray;
      }
   }
}
</script>
