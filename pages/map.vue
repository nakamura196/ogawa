<template>
  <div>
    <v-container fluid>
      <h2>{{ title }}</h2>
      <l-map
        v-if="markers.length > 0"
        style="height: 600px; width: 100%"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
          v-for="(marker, key) in markers"
          :key="key"
          :lat-lng="marker.latLng"
        >
          <l-popup>
            <a @click="search(marker.uri)">{{ marker.label }}</a>
          </l-popup>
        </l-marker>
      </l-map>

      <v-row class="my-10">
        <v-col>
          <v-simple-table v-if="factoids.length > 0">
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Factoid</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(factoid, key) in factoids" :key="key">
                  <td>{{ factoid }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col>
          <v-simple-table v-if="personInContexts.length > 0">
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">
                    PersonInContext（条件固定で表示しています。）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(personInContext, key) in personInContexts"
                  :key="key"
                >
                  <td>{{ personInContext }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      baseUrl: process.env.BASE_URL,
      nodeEntity: '', // entityInContext の URI
      title: '',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [51.505, -0.159],
      markers: [],
      factoids: [],
      personInContexts: [],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  async mounted() {
    const endpoint =
      'https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql'

    const filterCriteria = await this.getFilterCriteria()

    const query = `PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
      SELECT * WHERE {
        ?placeUri dct:title ?title .
        optional { ?placeUri wgs84:lat ?lat; wgs84:long ?long .  }
        filter(${filterCriteria})
      }`

    const url = `${endpoint}?query=${encodeURIComponent(query)}`

    const data = (await this.$axios.get(url)).data

    const markers = []
    for (const item of data) {
      // 緯度・経度がない場合はスキップ
      if (!item.lat) {
        continue
      }
      markers.push({
        uri: item.placeUri,
        label: item.title,
        latLng: [item.lat, item.long],
      })
    }

    this.markers = markers
  },

  methods: {
    // 地名の一覧を取得する
    async getFilterCriteria() {
      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix owl: <http://www.w3.org/2002/07/owl#>
      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>
      SELECT * WHERE {
        ?place owl:sameAs ?placeUri; a fpo:Location
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const filters = []

      for (const item of data) {
        filters.push(`?placeUri = <${item.placeUri}>`)
      }
      return filters.join('||')
    },
    // ポップアップの文字列が選択された時の処理
    search(placeUri) {
      this.searchFactoid(placeUri)
      this.searchPerson(placeUri)
    },
    async searchFactoid(placeUri) {
      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix owl: <http://www.w3.org/2002/07/owl#>
      prefix ex2: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid_v2.owl#>

      SELECT DISTINCT * WHERE {
      ?place owl:sameAs <${placeUri}> .
      ?placeRef ex2:referencesEntity ?place .
      ?factoid ?propertyWhere ?placeRef .
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const factoids = []
      for (const item of data) {
        factoids.push(item.factoid)
      }
      this.factoids = factoids
    },
    async searchPerson(placeUri) {
      // テストのために残しています。
      placeUri = 'https://pleiades.stoa.org/places/167922'

      const endpoint = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

      const query = `prefix owl: <http://www.w3.org/2002/07/owl#>
      prefix ex2: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid_v2.owl#>

      SELECT DISTINCT * WHERE {
      ?place owl:sameAs <${placeUri}> .
      ?placeRef ex2:contextualAspectOf ?place .
      ?personInContext ex2:hasLocation ?placeRef .
      }`

      const url = `${endpoint}?query=${encodeURIComponent(query)}`

      const { data } = await this.$axios.get(url)

      const personInContexts = []
      for (const item of data) {
        personInContexts.push(item.personInContext)
      }
      this.personInContexts = personInContexts
    },
  },
}
</script>
