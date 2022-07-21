<template>
  <div>
    <div>{{count}}</div>
    <button @click="count++">CLick</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);
</script>

<style></style>
