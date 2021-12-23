<template>
  <div>
    <v-container>
      <TEI v-if="element" :element="element" />
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'

const convert = require('xml-js')

export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      top: process.env.top,
      siteName: process.env.siteName,
      element: null,
    }
  },
  async mounted() {
    const res = await axios.get(this.baseUrl + '/xml/BG_1_TEI.xml')

    const parser = new window.DOMParser()
    const xmlData = parser.parseFromString(res.data, 'text/xml')
    // this.xml = xmlData
    // console.log({ xmlData })

    const df = JSON.parse(
      convert.xml2json(xmlData.querySelector('text').outerHTML, {
        compact: false,
        spaces: 4,
      })
    )

    // console.log({ df })
    this.element = df
  },
}
</script>
