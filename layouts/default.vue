<template>
  <div>
    <AppHeader />
    <AppSubHeader :title="pageTitle" :description="pageDescription" />
    <main>
      <div class="d-flex">
        <SidebarToggle @toggle-sidebar="toggleSidebar" />
        <AppCategoryTabs :tabs="categories" />
      </div>
      <div class="d-flex" :class="{ 'sidebar-closed': isClosed }">
        <Sidebar :is-closed="isClosed" />
        <div class="py-3 position-relative content-container" :class="{ 'full-width': isClosed }">
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

const pageDefaults = {
  '/': {
    title: 'Iconscout - High Quality Digital Assets',
    description: 'Browse and download icons, illustrations, and 3D assets'
  },
  '/free-icons': {
    title: '237 High Quality Free Icons',
    description: '248 Icons exclusively selected by our designer community.'
  },
  '/free-illustrations': {
    title: '237 Stunning Free Illustrations',
    description: '248 Illustrations exclusively selected by our designer community.'
  },
  '/free-3d-illustrations': {
    title: '237 Limit 3D Illustrations',
    description: '248 3Ds exclusively selected by our designer community.'
  },
  '/free-all-assets': {
    title: 'All Free Digital Assets',
    description: 'Browse our complete collection of premium-quality free assets.'
  }
}

const route = useRoute()
const pageTitle = computed(() => {
  return pageDefaults[route.path]?.title || 'Iconscout Assets'
})

const pageDescription = computed(() => {
  return pageDefaults[route.path]?.description || 'High-quality digital assets for your projects'
})
</script>

<style lang="scss" scoped>
.content-container {
  padding-inline: 40px;
  transition: width 0.3s ease;
  width: calc(100% - 260px);

  @media screen and (max-width: 992px) {
    width: 100%;
    padding-inline: 16px;
  }

  &.full-width {
    width: 100%;
  }
}
</style>
