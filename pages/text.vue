<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col style="height: 600px; overflow-y: auto">
          <TEI v-if="element" :element="element" />
        </v-col>
        <v-col>
          <FactoidNetwork
            v-if="selectedFactoidIdOnText"
            :id="selectedFactoidIdOnText"
          />
        </v-col>
      </v-row>
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
  computed: {
    wordAttributes: {
      // getter 関数
      get() {
        return this.$store.getters.getWordAttributes
      },
      // setter 関数
      set(value) {
        this.$store.commit('setWordAttributes', value)
      },
    },
    selectedFactoidIdOnText: {
      // getter 関数
      get() {
        return this.$store.getters.getSelectedFactoidIdOnText
      },
      // setter 関数
      set(value) {
        this.$store.commit('setSelectedFactoidIdOnText', value)
      },
    },
  },
  async mounted() {
    const res = await axios.get(this.baseUrl + '/xml/BG_1_TEI.xml')

    const parser = new window.DOMParser()
    const xmlData = parser.parseFromString(res.data, 'text/xml')

    const df = JSON.parse(
      convert.xml2json(xmlData.querySelector('text').outerHTML, {
        compact: false,
        spaces: 4,
      })
    )

    // idの一覧を取得する
    const ws = xmlData.querySelectorAll('w')
    const wids = []
    for (const w of ws) {
      const id = w.getAttribute('xml:id')
      wids.push(id)
    }

    // span毎に処理を加える
    const spans = xmlData.querySelector('spanGrp').querySelectorAll('span')

    const metadata = {}

    for (const span of spans) {
      const spanId = span.getAttribute('xml:id')
      const type = span.getAttribute('type')

      const from = span.getAttribute('from').slice(1)
      const to = span.getAttribute('to').slice(1)

      const indexFrom = wids.indexOf(from)
      const indexTo = wids.indexOf(to)

      const note = span.querySelector('note').textContent

      for (let index = indexFrom; index <= indexTo; index++) {
        const id = wids[index]
        if (!metadata[id]) {
          metadata[id] = []
        }
        metadata[id].push({
          id: spanId,
          type,
          note,
        })
      }
    }

    this.wordAttributes = metadata
    this.element = df
  },
}
</script>
