<template>
  <div class="app-subheader py-3 py-md-4" role="region" aria-labelledby="page-title">
    <h1 id="page-title">{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: null,
    required: true
  },
  description: {
    type: String,
    default: null,
    required: false
  }
})
</script>

<style lang="scss" scoped>
@use './AppSubHeader.scss';
</style>
