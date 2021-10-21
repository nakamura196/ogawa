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

      {{ geo }}

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
const url = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

export default {
  components: {
    Breadcrumbs,
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
          optional { ?s ex:atWhere/ex:referencesEntity/owl:sameAs ?placeUri . }
      }`

    const data4Fact = (
      await $axios.get(`${url}?query=${encodeURIComponent(query4Fact)}`)
    ).data

    return {
      id,
      item: data4Fact[0],
    }
  },
  data() {
    return {
      xml: '',
      geo: {},
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
  },
  mounted() {
    // CTSからテキストを取得
    this.getCTS()
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
      const filterCriteria = `?placeUri = <${item.placeUri}>`
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
        this.geo = data[0]
      }
    },
  },
}
</script>
