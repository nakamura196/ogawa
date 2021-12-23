<template>
  <component :is="getComponent(element)">
    <template v-if="element.text">
      {{ element.text }}
    </template>
    <template v-else-if="element.name === 'persName'">
      <span style="color: red">
        <template v-for="(e, key) in element.elements">
          <TEI :key="key" :element="e"> </TEI>
        </template>
      </span>
    </template>
    <template v-else-if="element.name === 'orgName'">
      <span style="color: green">
        <template v-for="(e, key) in element.elements">
          <TEI :key="key" :element="e"> </TEI>
        </template>
      </span>
    </template>
    <template v-else-if="element.name === 'placeName'">
      <span style="color: blue">
        <template v-for="(e, key) in element.elements">
          <TEI :key="key" :element="e"> </TEI>
        </template>
      </span>
    </template>
    <template v-else>
      <template v-for="(e, key) in element.elements">
        <TEI :key="key" :element="e"></TEI>
      </template>
    </template>
  </component>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import TEI from '~/components/TEI.vue'

@Component({
  name: 'TEI',
  components: {
    TEI,
  },
})
export default class TEIElements extends Vue {
  @Prop({})
  element!: any

  getComponent(element: any) {
    if (element.name === 'div') {
      return 'div'
    } else if (element.name === 'div1') {
      return 'div'
    } else if (element.name === 'p') {
      return 'p'
    } else {
      return 'span'
    }
  }
}
</script>
