<template>
  <v-row>
    <v-col v-for="(item, i) in products" :key="i" cols="12" sm="4" lg="3">
      <Product :image-id="i" :item="item" />
    </v-col>
  </v-row>
</template>

<script>
  import Product from '~/components/Product'
  export default {
    name: 'Products',
    components: {
      Product
    },
    data: () => ({
      products: []
    }),
    beforeMount() {
      this.getProducts()
    },
    methods: {
      async getProducts() {
        const productsRef = this.$fire.database.ref('products')
        try {
          const data = await productsRef.once('value')
          this.products = data.val()
        } catch (err) {
          console.error(err)
        }
      },
      addItem (product) {
        this.$store.commit('basket/add', product)
      }
    }
  }
</script>
