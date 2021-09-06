<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Products />
    </v-col>
  </v-row>
</template>

<script>
  import Products from '~/components/Products'
  export default {
    components: {
      Products
    }
  }
</script>
