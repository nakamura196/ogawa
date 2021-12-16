<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2>{{ item.description }} ({{ 'Fact ' + id }})</h2>

      <template v-if="xml">
        <h3 class="mt-5">このFactoidの典拠</h3>

        <span v-html="xml" />
      </template>

      <hr class="my-10" />

      <Map
        v-if="markers.length > 0 || geojson"
        :markers="markers"
        :center="center"
        :geojson="geojson"
      />

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

      <div class="mt-4">
        <v-btn @click="hierarchical = false">hierarchicalを使用しない</v-btn>
        <v-btn @click="hierarchical = true">hierarchicalを使用する</v-btn>

        <v-btn @click="sortMethod = 'directed'">directed</v-btn>
        <v-btn @click="sortMethod = 'hubsize'">hubsize</v-btn>

        <v-btn @click="physicsEnabled = true">physicsを使用する</v-btn>
        <v-btn @click="physicsEnabled = false">physicsを使用しない</v-btn>
      </div>
      <hr class="mt-10" />

      <h1 class="mt-10">以下はメモ</h1>

      {{ item }}

      <v-simple-table v-if="false">
        <template #default>
          <tbody>
            <tr v-for="(stmt, key) in item" :key="key">
              <td>{{ stmt.v }}</td>
              <td>{{ stmt.o }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
import { Network } from 'vue-visjs'
import Breadcrumbs from '~/components/layout/Breadcrumbs.vue'
const url = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

export default {
  components: {
    Breadcrumbs,
    network: Network,
  },
  async asyncData({ params, $axios }) {
    const id = await params.id

    const uri = 'http://www.example.com/roman-ontology/resource/fact/fact_' + id

    const query4Fact = `
      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>
      prefix owl: <http://www.w3.org/2002/07/owl#>
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      select distinct * where {
          ?s ex:description ?description;
          ex:source/ex:ctsURI ?ctsURI .
          filter (?s = <${uri}> ) .

          optional {
            { ?s ex:atWhere/ex:referencesEntity/owl:sameAs ?placeUri . }
            UNION
            { ?s ex:fromWhere/ex:referencesEntity/owl:sameAs ?placeUri . }
            UNION
            { ?s ex:toWhere/ex:referencesEntity/owl:sameAs ?placeUri . }
            UNION
            { ?s ex:nearWhere/ex:referencesEntity/owl:sameAs ?placeUri . }
          }
      }`

    const data4Fact = (
      await $axios.get(`${url}?query=${encodeURIComponent(query4Fact)}`)
    ).data

    const item = {}
    for (let i = 0; i < data4Fact.length; i++) {
      const eachData4Fact = data4Fact[i]
      if (i === 0) {
        for (const key in eachData4Fact) {
          item[key] = eachData4Fact[key]
        }
        item.placeUri = []
      }

      item.placeUri.push(eachData4Fact.placeUri)
    }

    return {
      id,
      item,
    }
  },
  data() {
    return {
      xml: '',
      geo: {},
      markers: [],
      center: [51.505, -0.159],
      geojson: null,

      nodes: [],
      edges: [],
      nodesMap: {},

      sortMethod: 'directed',
      hierarchical: false,
      physicsEnabled: true,
    }
  },
  computed: {
    bh() {
      return [
        {
          text: this.$t('top'),
          disabled: false,
          to: this.localePath({ name: 'index' }),
          exact: true,
        },
        {
          text: this.$t('search'),
          disabled: false,
          to: this.localePath({ name: 'search' }),
          exact: true,
        },
        {
          text: 'Facet ' + this.id,
        },
      ]
    },
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

      console.log({ option })

      return option
    },
  },
  mounted() {
    // CTSからテキストを取得
    this.getCTS()
    // pleiadesから緯度・経度情報の取得
    this.getPlaceInfo()

    this.getRelatedFactoids()
  },
  methods: {
    // CTSからテキストを取得
    async getCTS() {
      const ctsURI = this.item.ctsURI
      try {
        const { data } = await axios.get(ctsURI)

        // jsでxmlを処理

        this.xml = data
      } catch (e) {
        console.log({ e })
      }
    },
    // pleiadesから緯度・経度情報の取得
    async getPlaceInfo() {
      const item = this.item

      const stmts = []
      for (const placeUri of item.placeUri) {
        stmts.push(`?placeUri = <${placeUri}>`)
      }
      const filterCriteria = stmts.join(' || ')

      // const filterCriteria = `?placeUri = <${item.placeUri}>`
      const endpoint =
        'https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql'

      const query = `PREFIX geo: <http://www.opengis.net/ont/geosparql#>
      PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>

      PREFIX pleiades: <https://pleiades.stoa.org/places/vocab#>
      PREFIX osspatial: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>
      PREFIX osgeo: <http://data.ordnancesurvey.co.uk/ontology/geometry/>

      SELECT * WHERE {
        ?placeUri dct:title ?title .
        optional {
          { ?placeUri wgs84:lat ?lat; wgs84:long ?long . }
          UNION
          { ?placeUri pleiades:hasLocation/osspatial:partiallyOverlaps/geo:hasGeometry/osgeo:asGeoJSON ?geo }
        }
        filter(${filterCriteria})
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      if (data.length > 0) {
        const features = []

        const markers = []
        let center = []

        for (const geo of data) {
          if (!geo.lat) {
            features.push({
              type: 'Feature',
              geometry: JSON.parse(geo.geo),
              properties: {
                label: geo.title,
                uri: geo.placeUri,
              },
            })
          } else {
            const marker = {
              latLng: [geo.lat, geo.long],
              label: geo.title,
            }
            markers.push(marker)
            center = [geo.lat, geo.long]
          }
        }

        if (features.length > 0) {
          const geojson = {
            type: 'FeatureCollection',
            features,
          }
          this.geojson = geojson
        }

        if (markers.length > 0) {
          this.markers = markers
          this.center = center
        }
      }
    },
    async getRelatedFactoids() {
      const item = this.item

      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT * WHERE {
        ?s ?p ?o; ex:description ?desc_s .
        optional {
          ?s ex:referencesEntityInContext ?entityInContext_s0; ex:referencesEntity ?referencesEntity_s0 .
          ?referencesEntity_s0 ex:name ?referencesEntityName_s0; rdf:type ?referencesEntityType_s0
        }
        optional {
          ?s ?related_so ?s_o .
          ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .
          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s
        }
        ?o a/rdfs:subClassOf* ex:Factoid
        filter (?s = <${item.s}> || ?o = <${item.s}>)
        ?o ex:description ?desc_o .
        optional {
          ?o ?related_oo ?o_o .
          ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .
          ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o
        }
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const nodesMap = {}
      const edgesMap = {}

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
              context: obj[`entityInContext_${key}`],
              type: entityType,
            }
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

      const nodes = []
      for (const nodeUri in nodesMap) {
        nodes.push(nodesMap[nodeUri])
      }

      const edges = []
      for (const edgeUri in edgesMap) {
        edges.push(edgesMap[edgeUri])
      }

      this.edges = edges
      this.nodes = nodes

      console.log({ edges, nodes })

      this.nodesMap = nodesMap
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
