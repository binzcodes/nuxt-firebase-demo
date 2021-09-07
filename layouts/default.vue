<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="orange"
    >
      <v-btn
        icon
      >
        🔥
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      right
      fixed
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Shopping Basket
          </v-list-item-title>
          <v-list-item-subtitle>
            A summary of selected items
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <Basket />

      <template #append>
        <BasketSummary />
      </template>

    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Basket from '~/components/Basket'
import BasketSummary from '~/components/BasketSummary'
export default {
  components: {
    Basket,
    BasketSummary
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/basket'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: 'The Fire Store'
    }
  },
}
</script>
