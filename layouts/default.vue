<template>
  <div>
    <AppHeader />
    <AppSubHeader
      title="237 Limit 3D Illustrations"
      description="248 3Ds exclusively selected by our designer community."
    />
    <main>
      <div class="d-flex">
        <SidebarToggle />
        <AppCategoryTabs :tabs="categories" />
      </div>
      <div class="d-flex">
        <Sidebar />
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@components/Header/AppHeader.vue'
import AppSubHeader from '@components/SubHeader/AppSubHeader.vue'
import AppFooter from '@components/Footer/AppFooter.vue'
import SidebarToggle from '@components/Sidebar/SidebarToggle/SidebarToggle.vue'
import AppCategoryTabs from '@components/CategoryTabs/AppCategoryTabs.vue'
const categories = [
  { path: '/free-all-assets', name: 'All Assets' },
  { path: '/free-3d-illustrations', name: '3D Illustrations' },
  { path: '/free-lottie-animations', name: 'Lottie Animations' },
  { path: '/free-illustrations', name: 'Illustrations' },
  { path: '/free-icons', name: 'Icons' }
]
</script>

<style scoped></style>
