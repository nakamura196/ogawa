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
          v-for="(markerLatLng, key) in markers"
          :key="key"
          :lat-lng="markerLatLng"
        ></l-marker>
      </l-map>
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
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  /*
  created(){
  },
  */

  async mounted() {
    const placeUri = 'https://pleiades.stoa.org/places/177473'
    const placeUri2 = 'https://pleiades.stoa.org/places/167652'

    const endpoint =
      'https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql'

    const query = `PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
      SELECT * WHERE {
        ?placeUri wgs84:lat ?lat; wgs84:long ?long; dct:title ?title .
        filter(?placeUri = <${placeUri}> || ?placeUri = <${placeUri2}>)
      }`

    const url = `${endpoint}?query=${encodeURIComponent(query)}`

    const data = (await this.$axios.get(url)).data

    const markers = []
    for (const item of data) {
      markers.push([item.lat, item.long])
    }
    this.markers = markers
  },

  methods: {},
}
</script>
