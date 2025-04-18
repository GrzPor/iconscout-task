<template>
  <div class="app-subheader py-4">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
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
