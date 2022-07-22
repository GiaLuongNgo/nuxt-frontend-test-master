<template>
  <div class="error-container my-40 md:my-64 container px-10 md:px-0">
    <v-img
      max-width="64"
      max-height="64"
      :src="require(`~/assets/error.svg`)"
    />
    <template v-if="error.statusCode === '404'">
      <h1 class="md:text-2xl text-xl font-bold md:mb-3 mb-2">Page not found</h1>
      <div
        class="mx-auto text-center md:text-lg text-base text-light-gray mb-14"
      >
        Sorry, We can’t find the page that you’re looking for. Check the URL and
        try again.
      </div>
    </template>
    <template v-else>
      <h1 class="md:text-2xl text-xl font-bold md:mb-3 mb-2">
        {{ otherError }}
      </h1>
    </template>

    <v-btn
      class="py-3 px-6 text-lg capitalize"
      to="/"
      color="primary"
      rounded
      nuxt
      ><span>Go to Homepage</span></v-btn
    >
  </div>
</template>

<script>
export default {
  layout: 'Error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page not found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === '404' ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.error-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
