<template>
  <v-data-table :headers="headers" :items="products" class="elevation-1">
    <template v-slot:[`item.name`]="{ item }">
      <nuxt-link rel="preload" :to="`product/${item.pid}`">
        {{ item.name }}
      </nuxt-link>
    </template>
  </v-data-table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headers: [
        {
          text: "id",
          align: "start",
          sortable: false,
          value: "pid",
        },
        { text: "Name", sortable: false, value: "name" },
        { text: "Price", value: "price" },
        { text: "Currency", value: "currency" },
        { text: "Stock", value: "stock" },
      ],
    };
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>
