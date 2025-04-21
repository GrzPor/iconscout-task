<template>
  <div
    class="app-sidebar"
    :class="{ 'is-closed': isClosed }"
    role="complementary"
    aria-label="Filters"
  >
    <div class="app-sidebar__wrapper px-4">
      <div class="base-toggle">
        <span class="font-size-sm app-sidebar__label" id="exclusive-label"
          >IconScout Exclusive</span
        >
        <input
          type="checkbox"
          id="exclusiveIcons"
          v-model="exclusiveIcons"
          aria-labelledby="exclusive-label"
        />
        <label for="exclusiveIcons" aria-hidden="true"></label>
      </div>
    </div>
    <SidebarRadioSection :items="radioSections" @toggle="toggleSection" />
    <div class="app-sidebar__wrapper px-4">
      <button
        @click="isCategoriesOpen = !isCategoriesOpen"
        aria-controls="collapse-categories"
        :aria-expanded="isCategoriesOpen"
        class="w-100 btn-zero app-sidebar__btn"
      >
        <span class="font-size-sm app-sidebar__label"> Categories </span>
        <AngleUpIcon :class="{ 'rotate-180': !isCategoriesOpen }" aria-hidden="true" />
      </button>

      <BCollapse id="collapse-categories" v-model="isCategoriesOpen">
        <ul class="list-unstyled d-flex flex-wrap gap-2" role="list">
          <li v-for="(category, index) in categories" :key="index">
            <a :href="category.url" class="app-sidebar__category">{{ category.name }}</a>
          </li>
        </ul>
      </BCollapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarRadioSection from './SidebarRadioSection/SidebarRadioSection.vue'
import { ref } from 'vue'
import AngleUpIcon from '@images/icons/angle-up.svg'

defineProps({
  isClosed: {
    type: Boolean,
    default: false
  }
})

const exclusiveIcons = ref(false)
const isCategoriesOpen = ref(false)
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

const categories = ref([
  {
    name: 'E-commerce & Shopping',
    url: 'e-commerce-shopping'
  },
  {
    name: 'Deliver',
    url: 'delivery'
  },
  {
    name: 'Business',
    url: 'business'
  }
])

function toggleSection(index: number) {
  radioSections.value[index].isOpen = !radioSections.value[index].isOpen
}
</script>

<style lang="scss" scoped>
@use './Sidebar.scss';
</style>
