<template>
  <v-container>
    <h2>{{ title }}</h2>

    <network
      id="mynetwork"
      ref="network"
      class="mt-5"
      style="width: 100%; height: 650px"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      @click="onNodeSelected"
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
      fact: '',
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
        ?p a ex:PersonInContext; 
          ex:eventSince ?since;
          ex:eventUntil ?until .
      }`

      const data4Person = (
        await this.$axios.get(`${url}?query=${encodeURIComponent(query4Person)}`)
      ).data

      const query4Fact = `
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      prefix ex2: <http://www.example.com/roman-ontology/resource/fact/>
      select distinct * where {
         ex2:fact_2 ex:mentionedAsPrecedent* ?s . 
         ?s ex:mentionedAsPrecedent ?o . 
         ?o ex:mentionedAsPrecedent* ex2:fact_13 . 
      }`

      const data4Fact = (
        await this.$axios.get(`${url}?query=${encodeURIComponent(query4Fact)}`)
      ).data

      console.log({data4Person, data4Fact})


      const edges = []
      const existsNodes = []
      const nodes = []

      const keys = ["s", "o"]

      for(const obj of data4Fact){
        for(const key of keys){
          const uri = obj[key]
          const spl = uri.split('/')
          const label = spl[spl.length - 1]
          if (!existsNodes.includes(uri)) {
            nodes.push({
              id: uri,
              label,
              x: nodes.length * 200,
              y: 0,
              // fixed: true,
              physics: false,
              shape: "box",
            })

            existsNodes.push(uri)
          }
        }

        edges.push({
          from: obj.s,
          to: obj.o,
          arrows: {
            to: {
              enabled: true,
            },
          },
        })
      }  

      this.nodes = nodes
      this.edges = edges
      this.loading = false
    },
  },
}
</script>
<style>
#mynetwork {
  border: 1px solid lightgray;
}
</style>
