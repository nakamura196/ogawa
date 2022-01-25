<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2>{{ item.description }} ({{ getTitle(id) }})</h2>

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

      <FactoidNetwork :id="item.s" />

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
import Breadcrumbs from '~/components/layout/Breadcrumbs.vue'
import FactoidNetwork from '~/components/FactoidNetwork.vue'

const url = process.env.endpoint // 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

export default {
  components: {
    Breadcrumbs,
    FactoidNetwork,
  },
  async asyncData({ params, $axios }) {
    const id = await params.id

    const uri = 'http://www.example.com/roman-ontology/resource/Factoid/' + id

    const query4Fact = `
      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>
      prefix owl: <http://www.w3.org/2002/07/owl#>
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      select distinct * where {
          ?s ex:description ?description .
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
          text: this.getTitle(this.id),
        },
      ]
    },
  },

  mounted() {
    // CTSからテキストを取得
    // this.getCTS()
    // pleiadesから緯度・経度情報の取得
    this.getPlaceInfo()
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

    getTitle(factoidId) {
      return factoidId.replace('f_', 'Fact ')
    },
  },
}
</script>
