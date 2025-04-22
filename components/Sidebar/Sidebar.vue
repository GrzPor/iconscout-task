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
    <SidebarRadioSection
      :items="radioSections"
      :selected-values="selectedValues"
      @toggle="toggleSection"
      @update:selection="updateSelection"
    />
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
import AngleUpIcon from '@images/icons/angle-up.svg'
import { subMenu } from '@data/mock-data'

defineProps({
  isClosed: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const exclusiveIcons = ref(false)
const isCategoriesOpen = ref(false)

const selectedValues = ref({
  asset: '',
  view: 'individual',
  price: 'free',
  'sort-by': 'popular'
})

const routeToAssetMap: Record<string, string> = {
  '/free-all-assets': 'all-assets',
  '/free-3d-illustrations': '3D-illustrations',
  '/free-lottie-animations': 'lottie-animations',
  '/free-illustrations': 'illustrations',
  '/free-icons': 'icons'
}

watchEffect(() => {
  if (route.path in routeToAssetMap) {
    selectedValues.value.asset = routeToAssetMap[route.path]
  }
})

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

const categories = ref(subMenu)

function toggleSection(index: number) {
  radioSections.value[index].isOpen = !radioSections.value[index].isOpen
}

function updateSelection(name: string, value: string) {
  selectedValues.value[name as keyof typeof selectedValues.value] = value

  if (name === 'asset') {
    const assetToRouteMap = {
      'all-assets': '/free-all-assets',
      '3D-illustrations': '/free-3d-illustrations',
      'lottie-animations': '/free-lottie-animations',
      illustrations: '/free-illustrations',
      icons: '/free-icons'
    } as const

    type AssetKey = keyof typeof assetToRouteMap
    const isValidAsset = (key: string): key is AssetKey => {
      return key in assetToRouteMap
    }

    if (isValidAsset(value)) {
      const currentQuery = route.query.query ? { query: route.query.query } : {}

      navigateTo({
        path: assetToRouteMap[value],
        query: currentQuery
      })
    }
  } else if (name === 'price') {
    let priceValue = null

    if (value === 'free') {
      priceValue = 'free'
    } else if (value === 'premium') {
      priceValue = 'premium'
    }

    const currentQuery = { ...route.query }

    if (priceValue) {
      currentQuery.price = priceValue
    } else {
      delete currentQuery.price
    }

    navigateTo({
      path: route.path,
      query: currentQuery
    })
  }
}
</script>

<style lang="scss" scoped>
@use './Sidebar.scss';
</style>
