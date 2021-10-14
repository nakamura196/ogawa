<template>
  <v-container class="my-5">
    <h2>{{ 'Fact ' + id }}</h2>
  </v-container>
</template>
<script>
export default {
  components: {},
  async asyncData({ params, $axios }) {
    const id = await params.id
    return { id }
  },
  data() {
    return {}
  },
}
</script>
