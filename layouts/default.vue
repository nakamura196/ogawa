<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :href="item.href"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer :dark="true" class="mt-5">
      <v-container>
        <p class="text-center my-5">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,

      items: [
        {
          icon: 'mdi-magnify',
          title: 'Search',
          to: this.localePath({ name: 'search' }),
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: this.localePath({ name: 'index' }),
        },
        {
          icon: 'mdi-calendar',
          title: 'Timeline',
          to: this.localePath({ name: 'timeline' }),
        },
        {
          icon: 'mdi-table',
          title: 'table',
          to: this.localePath({ name: 'table' }),
        },
        {
          icon: 'mdi-magnify',
          title: 'テーブルテスト2',
          to: this.localePath({ name: 'table2' }),
        },
        {
          icon: 'mdi-network',
          title: 'Network',
          to: this.localePath({ name: 'network' }),
        },
        {
          icon: 'mdi-network',
          title: 'Network Static',
          to: this.localePath({ name: 'network_static' }),
        },
        {
          icon: 'mdi-network',
          title: 'Network Dynamic',
          to: this.localePath({ name: 'network_dynamic' }),
        },
        {
          icon: 'mdi-map',
          title: 'Map',
          to: this.localePath({ name: 'map' }),
        },
        {
          icon: 'mdi-dabase',
          title: 'Snorql',
          href: process.env.BASE_URL + '/snorql',
        },
      ],
      title: 'Roman DB',
    }
  },
}
</script>
