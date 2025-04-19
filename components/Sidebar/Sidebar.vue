<template>
  <div class="app-sidebar">
    <div class="app-sidebar__wrapper px-4">
      <BFormCheckbox v-model="exclusiveIcons" switch reverse size="lg">
        <span class="font-size-sm app-sidebar__label">Iconscout Exclusive</span>
      </BFormCheckbox>
    </div>
    <SidebarRadioSection :items="radioSections" @toggle="toggleSection" />
  </div>
</template>

<script setup lang="ts">
import SidebarRadioSection from './SidebarRadioSection/SidebarRadioSection.vue'
import { ref } from 'vue'

const exclusiveIcons = ref(false)

const radioSections = ref([
  {
    id: 'asset',
    title: 'Asset',
    isOpen: true,
    options: [
      {
        name: 'asset',
        value: 'all-assets',
        label: 'All Assets'
      },
      {
        name: 'asset',
        value: '3D-illustrations',
        label: '3D Illustrations'
      },
      {
        name: 'asset',
        value: 'lottie-animations',
        label: 'Lottie Animations'
      },
      {
        name: 'asset',
        value: 'illustrations',
        label: 'Illustrations'
      },
      {
        name: 'asset',
        value: 'icons',
        label: 'Icons'
      }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    isOpen: true,
    options: [
      {
        name: 'price',
        value: 'free',
        label: 'Free'
      },
      {
        name: 'price',
        value: 'premium',
        label: 'Premium'
      },
      {
        name: 'price',
        value: 'all',
        label: 'All'
      }
    ]
  },
  {
    id: 'view',
    title: 'View',
    isOpen: true,
    options: [
      {
        name: 'view',
        value: 'pack',
        label: 'Pack'
      },
      {
        name: 'view',
        value: 'individual',
        label: 'Individual'
      }
    ]
  },
  {
    id: 'sort-by',
    title: 'Sort by',
    isOpen: true,
    options: [
      {
        name: 'sort-by',
        value: 'popular',
        label: 'Popular'
      },
      {
        name: 'sort-by',
        value: 'latest',
        label: 'Latest'
      },
      {
        name: 'sort-by',
        value: 'featured',
        label: 'Featured'
      }
    ]
  }
])

function toggleSection(index) {
  radioSections.value[index].isOpen = !radioSections.value[index].isOpen
}
</script>

<style lang="scss" scoped>
@use './Sidebar.scss';
</style>
