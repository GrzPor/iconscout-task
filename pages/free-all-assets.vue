<template>
  <div class="px-5 py-3 test">
    <AppHorizontalCategoryMenu :menu="subMenu" />
    <h1>Free all assets</h1>
  </div>
</template>

<script setup lang="ts">
import AppHorizontalCategoryMenu from '@components/HorizontalCategoryMenu/AppHorizontalCategoryMenu.vue'

const subMenu = [
  { name: 'All', url: '/free-all-assets' },
  { name: 'Icons', url: '/free-all-assets/icons' },
  { name: 'Illustrations', url: '/free-all-assets/illustrations' },
  { name: 'Photos', url: '/free-all-assets/photos' },
  { name: '3D', url: '/free-all-assets/3d' },
  { name: 'Vectors', url: '/free-all-assets/vectors' },
  { name: 'Animations', url: '/free-all-assets/animations' },
  { name: 'Templates', url: '/free-all-assets/templates' },
  { name: 'UI Kits', url: '/free-all-assets/ui-kits' },
  { name: 'Fonts', url: '/free-all-assets/fonts' },
  { name: 'Mockups', url: '/free-all-assets/mockups' },
  { name: 'Backgrounds', url: '/free-all-assets/backgrounds' },
  { name: 'Logos', url: '/free-all-assets/logos' },
  { name: 'Textures', url: '/free-all-assets/textures' },
  { name: 'Patterns', url: '/free-all-assets/patterns' },
  { name: 'Infographics', url: '/free-all-assets/infographics' },
  { name: 'Business', url: '/free-all-assets/business' },
  { name: 'Education', url: '/free-all-assets/education' },
  { name: 'Food', url: '/free-all-assets/food' },
  { name: 'Nature', url: '/free-all-assets/nature' },
  { name: 'Technology', url: '/free-all-assets/technology' },
  { name: 'Healthcare', url: '/free-all-assets/healthcare' },
  { name: 'Sports', url: '/free-all-assets/sports' },
  { name: 'Travel', url: '/free-all-assets/travel' },
  { name: 'Music', url: '/free-all-assets/music' },
  { name: 'Cartoons', url: '/free-all-assets/cartoons' },
  { name: 'Fashion', url: '/free-all-assets/fashion' },
  { name: 'Holidays', url: '/free-all-assets/holidays' },
  { name: 'Social Media', url: '/free-all-assets/social-media' },
  { name: 'Abstract', url: '/free-all-assets/abstract' }
]
</script>

<style scoped>
.test {
  width: calc(100% - 260px);
  flex-grow: 1;
  position: relative;
  /* overflow: hidden; */
}
</style>
