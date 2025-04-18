<template>
  <div>
    <header>
      <h1>Header</h1>
    </header>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@components/Footer/AppFooter.vue'
</script>

<style scoped></style>
