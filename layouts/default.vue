<template>
  <div>
    <AppHeader />
    <AppSubHeader
      title="237 Limit 3D Illustrations"
      description="248 3Ds exclusively selected by our designer community."
    />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@components/Header/AppHeader.vue'
import AppSubHeader from '@components/SubHeader/AppSubHeader.vue'
import AppFooter from '@components/Footer/AppFooter.vue'
</script>

<style scoped></style>
