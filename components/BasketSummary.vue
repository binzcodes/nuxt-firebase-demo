<template>
  <v-card>
    
  </v-card>
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
