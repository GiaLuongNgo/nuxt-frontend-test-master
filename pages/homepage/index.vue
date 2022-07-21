<template>
  <div class="home-wrapper">
    <nuxt-logo />

    <nuxt-link :to="`product`">
      <h3>Product list</h3>
    </nuxt-link>
  </div>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo.vue";
export default {
  components: { NuxtLogo },
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
h3 {
  margin-top: 24px;
}
</style>
