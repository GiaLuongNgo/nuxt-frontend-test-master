<template>
  <v-container>
    <v-app-bar color="primary" class="flex-grow-0" app dark>
      <h3>Product List</h3>
    </v-app-bar>
    <v-main class="mt-5">
      <back-button />
      <ProductList :products="products" />
    </v-main>
  </v-container>
</template>

<script>
import BackButton from '~/components/BackButton.vue';
import ProductList from "../../components/ProductList.vue";

export default {
  loading: true,
  components: { ProductList, BackButton },
  data() {
    return {
      products: [],
    };
  },
  head() {
    return {
      title: "Product List",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "Product List",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Product List",
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website",
        },
      ],
    };
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      try {
        const res = await this.$axios.get("api/products", {
          params: { auth: "sbx-auth-12345" },
        });
        this.products = res.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
</style>
