<template>
  <v-container class="my-5">
    <h2>{{ title }}</h2>

    <div class="pa-2" style="height: 400px; overflow-y: auto">
      <v-card
        v-for="(factoid, key) in factoids"
        :key="key"
        outlined
        flat
        class="mt-5 pa-4"
      >
        <h3>
          <nuxt-link
            :to="
              localePath({
                name: 'item-id',
                params: { id: factoid.s.split('fact_')[1] },
              })
            "
            >{{ getFactoidName(factoid.s) }}
          </nuxt-link>
        </h3>
        <div class="mt-2">
          {{ factoid.description }}
        </div>
        <template
          v-for="(type, key2) in ['follow', 'precedent', 'parallel', 'because']"
        >
          <div v-if="factoid[type]" :key="key2">
            {{ type }}: {{ getFactoidName(factoid[type]) }}
          </div>
        </template>
      </v-card>
    </div>
  </v-container>
</template>
<script>
const url = 'https://dydra.com/junjun7613/romanfactoid_v2/sparql'

export default {
  components: {},

  data() {
    return {
      title: this.$t('search'),
      factoids: [],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  mounted() {
    // factNodeの一覧を取得する
    this.getFactList()
  },
  methods: {
    getFactoidName(uri) {
      return 'Fact ' + uri.split('fact_')[1]
    },

    // factNodeの一覧を取得する
    async getFactList() {
      const query4Fact = `
      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>
      select distinct * where {
          ?s rdf:type/rdfs:subClassOf* ex:Factoid; ex:description ?description . 
          optional { ?s ex:mentionedAsFollow ?follow } .
          optional { ?s ex:mentionedAsPrecedent ?precedent } .
          optional { ?s ex:mentionedAsParallel ?parallel } .
          optional { ?s ex:because ?because } .
      }`

      const data4Fact = (
        await this.$axios.get(`${url}?query=${encodeURIComponent(query4Fact)}`)
      ).data

      this.factoids = data4Fact
    },
  },
}
</script>
