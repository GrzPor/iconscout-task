<template>
  <div>
    <AppHeader />
    <AppSubHeader
      title="237 Limit 3D Illustrations"
      description="248 3Ds exclusively selected by our designer community."
    />
    <main>
      <div class="d-flex">
        <SidebarToggle @toggle-sidebar="toggleSidebar" />
        <AppCategoryTabs :tabs="categories" />
      </div>
      <div class="d-flex" :class="{ 'sidebar-closed': isClosed }">
        <Sidebar :is-closed="isClosed" />
        <div
          class="px-5 py-3 position-relative content-container"
          :class="{ 'full-width': isClosed }"
        >
          <slot />
        </div>
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

const isClosed = ref(false)

function toggleSidebar() {
  isClosed.value = !isClosed.value
}
</script>

<style lang="scss" scoped>
.content-container {
  transition: width 0.3s ease;
  width: calc(100% - 260px);

  &.full-width {
    width: 100%;
  }
}
</style>
