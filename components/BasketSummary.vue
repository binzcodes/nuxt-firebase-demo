<template>
  <v-card>
    <div class="pa-2">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Total £{{basketTotal}}
          </v-list-item-title>
        </v-list-item-content>
        <v-btn block color="primary">
          Pay now
        </v-btn>
      </div>
  </v-card>
</template>

<script>
  export default {
    name: 'BasketSummary',
    computed: {
      basketTotal () {
        return (this.$store.state.basket.list.reduce((acc, {price}) => acc + price, 0) / 100).toFixed(2)
      }
    }
  }
</script>
