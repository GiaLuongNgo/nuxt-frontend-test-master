<template>
  <v-container class="product-wrapper">
    <back-button />
    <v-card>
      <v-container>
        <v-card-title>
          {{ product.name }}
        </v-card-title>
        <v-card-text>Price : {{ product.price }} {{ product.currency }}
        </v-card-text>
        <v-card-text>Stock : {{ product.stock }} </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import BackButton from '~/components/BackButton.vue';
import ProductList from "../../../components/ProductList.vue";

export default {
  components: { ProductList, BackButton },
  async asyncData({ $axios, params, error }) {
    let product = {};
    try {
      const res = await $axios.get(`api/product/${params.product}`, {
        params: { auth: "sbx-auth-12345" },
      });
      product = res.data;
    } catch (err) {
      return error({statusCode: err?.response?.data?.statusCode});
    }
    return {
      product,
    };
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.product.name,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.product.name,
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
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  margin: 0 auto;
  max-width: 700px;

  .v-card__text {
    color: #000;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
</style>
