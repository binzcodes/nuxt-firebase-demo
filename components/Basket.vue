<template>
  <v-list>
    <v-subheader inset>Shopping basket</v-subheader>
    <v-list-item v-for="item in basket" :key="item.text">
      <v-list-item-content>
        <v-list-item-title v-text="item.text" />
        <v-list-item-subtitle v-text="item.subtitle" />
        <v-list-item-subtitle class="text--primary"  v-text="`£${item.price / 100}`" />
      </v-list-item-content>
      <v-list-item-action>
          <v-btn icon @click="removeItem(item)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'Basket',
  computed: {
    basket () {
      return this.$store.state.basket.list
    }
  },
  methods: {
    addItem (e) {
      this.$store.commit('basket/add', e.target.value)
    },
    removeItem (e) {
      this.$store.commit('basket/remove', e)
    },
    // ...mapMutations({
    //   increment: 'basket/increment',
    //   decrement: 'basket/decrement'
    // })
  }
}
</script>
