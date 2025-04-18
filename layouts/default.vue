<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@components/Header/AppHeader.vue'
import AppFooter from '@components/Footer/AppFooter.vue'
</script>

<style scoped></style>
