<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="`https://picsum.photos/id/${imageId+10}/200/300`"
    >
      <v-card-title>{{item.text}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div class="mt-2 text-subtitle">
        £{{(item.price / 100).toFixed(2)}} • {{item.stock}} in stock
      </div>

      <v-row
        align="center"
        class="mx-0 my-2"
      >
        <v-rating
          :value="item.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{item.rating}}
        </div>
      </v-row>
      <div class="text-subtitle-2">{{item.subtitle}}</div>
      <div class="text-body-2">{{item.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="orange"
        text
        @click="addItem(item)"
      >
        Add to basket
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: ['imageId', 'item'],
  methods: {
    addItem (product) {
      this.$store.commit('basket/add', product)
    }
  }
}
</script>

