<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2>{{ 'Fact ' + id }}</h2>
    </v-container>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/layout/Breadcrumbs.vue'
export default {
  components: {
    Breadcrumbs,
  },
  async asyncData({ params, $axios }) {
    const id = await params.id
    return { id }
  },
  data() {
    return {}
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
}
</script>
