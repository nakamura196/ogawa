<template>
  <component :is="getComponent(element)">
    <template v-if="element.text">
      {{ element.text }}
    </template>
    <template v-else-if="element.name === 'w'">
      <template v-if="hasSpanId(element)">
        <!--
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <span style="display: inline-block" v-bind="attrs" v-on="on">
              <template v-for="(e, key) in element.elements">
                <TEI :key="key" :element="e"> </TEI>
              </template>
              &nbsp;
              <div
                v-for="(e, key2) in getSpanId(element)"
                :key="`l-${key2}`"
                style="margin-bottom: 2px; height: 4px"
                :style="`background-color: ${getTypeColor(e.type)}`"
              ></div>
            </span>
          </template>
          <span>{{ getSpanId(element) }}</span>
        </v-tooltip>
        -->

        <span style="display: inline-block">
          <template v-for="(e, key) in element.elements">
            <TEI :key="key" :element="e"> </TEI>
          </template>
          &nbsp;
          <v-tooltip
            v-for="(factoid, key2) in getSpanId(element)"
            :key="`l-${key2}`"
            bottom
          >
            <template #activator="{ on, attrs }">
              <div
                v-bind="attrs"
                style="margin-bottom: 4px; height: 8px; cursor: pointer"
                :style="`background-color: ${getTypeColor(factoid.type)}`"
                @click="clickFactoid(factoid.id)"
                v-on="on"
              ></div>
            </template>
            <span>{{ factoid.note }}</span>
          </v-tooltip>
        </span>
      </template>
      <template v-else>
        <span>
          <template v-for="(e, key) in element.elements">
            <TEI :key="key" :element="e"> </TEI>
          </template>
        </span>
      </template>
    </template>
    <template v-else-if="element.name === 'persName'">
      <span
        style="color: red; cursor: pointer"
        @dblclick="clickEntity(element)"
      >
        <template v-for="(e, key) in element.elements">
          <TEI :key="key" :element="e"> </TEI>
        </template>
      </span>
    </template>
    <template v-else-if="element.name === 'orgName'">
      <span
        style="color: green; cursor: pointer"
        @dblclick="clickEntity(element)"
      >
        <template v-for="(e, key) in element.elements">
          <TEI :key="key" :element="e"> </TEI>
        </template>
      </span>
    </template>
    <template v-else-if="element.name === 'placeName'">
      <span
        style="color: blue; cursor: pointer"
        @dblclick="clickEntity(element)"
      >
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

  /// /////

  get wordAttributes() {
    return this.$store.getters.getWordAttributes
  }

  get entityAttributes() {
    return this.$store.getters.getEntityAttributes
  }

  ///

  get selectedFactoidIdOnText() {
    return this.$store.getters.getSelectedFactoidIdOnText
  }

  set selectedFactoidIdOnText(value) {
    this.$store.commit('setSelectedFactoidIdOnText', value)
  }

  get selectedEntityIdOnText() {
    return this.$store.getters.getSelectedEntityIdOnText
  }

  set selectedEntityIdOnText(value) {
    this.$store.commit('setSelectedEntityIdOnText', value)
  }

  hasSpanId(element: any) {
    if (element.attributes) {
      const id = element.attributes['xml:id']
      return this.wordAttributes[id]
    } else {
      return false
    }
  }

  getSpanId(element: any) {
    if (element.attributes) {
      const id = element.attributes['xml:id']
      return this.wordAttributes[id]
    } else {
      return []
    }
  }

  getTypeColor(type: any) {
    let color = null
    if (type === 'Contact') {
      color = '#FFEE58' // yellow lighten-1
    } else if (type === 'FamilialRelationship') {
      color = '#42A5F5' // blue lighten-1
    } else if (type === 'SocialRelationship') {
      color = '#66BB6A' // green lighten-1
    } else {
      color = '#BDBDBD' // grey lighten-1
    }
    return color
  }

  clickFactoid(factoidId: string) {
    this.selectedEntityIdOnText = ''
    this.selectedFactoidIdOnText =
      'http://www.example.com/roman-ontology/resource/Factoid/' + factoidId
  }

  clickEntity(element: any) {
    this.selectedFactoidIdOnText = ''
    if (element.attributes) {
      const id = element.attributes['xml:id']
      const entityInContextUri = this.entityAttributes[id]
      this.selectedEntityIdOnText = entityInContextUri
    }
  }
}
</script>
