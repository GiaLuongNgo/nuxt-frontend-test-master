<template>
  <v-btn class="mb-24" @click="$router.go(-1)">
    <v-icon dark left>
      mdi-arrow-left
    </v-icon>
    Back
  </v-btn>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.mb-24 {
  margin-bottom: 24px;
}
</style>