<template>
  <header class="container-fluid d-flex align-items-center py-3-4 px-4 app-header" role="banner">
    <a href="/" class="app-header__logo mb-5-5">
      <img src="/assets/images/brand/iconscout_logo_for_white_bg.svg" alt="IconScout" />
    </a>
    <div class="app-header__search" role="search">
      <BDropdown class="pe-2 me-2 app-header__search-dropdown" variant="light" no-caret>
        <template #button-content>
          <span>{{ getCategoryDisplayName() }}</span>
          <AngleDownIcon class="ms-1" aria-hidden="true" />
        </template>
        <BDropdownItem
          v-for="category in categories"
          :key="category.value"
          :active="category.value === currentCategory"
          @click="setCategory(category.value)"
        >
          {{ category.label }}
        </BDropdownItem>
      </BDropdown>
      <div class="d-flex align-items-center">
        <SearchIcon class="me-2" filled aria-hidden="true" />
        <input
          v-model="searchQuery"
          class="app-header__search-input"
          placeholder="Search from 8 Million+ assets"
          aria-label="Search assets"
          @keyup.enter="handleSearch"
        />
        <button
          class="app-header__search-button rounded-2"
          aria-label="Visual search"
          @click="handleSearch"
        >
          <ImageSearchIcon aria-hidden="true" />
        </button>
      </div>
    </div>
    <nav class="w-100 app-header__nav" aria-label="Main navigation">
      <ul class="list-unstyled mb-0 d-flex align-items-center">
        <li v-for="item in menuItems" :key="item.name" class="d-flex align-items-center me-4">
          <a :href="item.url || '#'" :aria-label="item.carret ? `${item.name} menu` : undefined">
            <component v-if="item.icon" :is="item.icon" :filled="true" aria-hidden="true" />
            {{ item.name }}
            <AngleDownIcon v-if="item.carret" aria-hidden="true" />
          </a>
        </li>
        <li class="d-flex ms-auto me-3-4">
          <BButton pill variant="outline-secondary">Login</BButton>
        </li>
        <li>
          <BButton pill variant="primary">Sign up</BButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import GiftIcon from '@images/icons/gift.svg'
import AngleDownIcon from '@images/icons/angle-down.svg'
import SearchIcon from '@images/icons/search.svg'
import ImageSearchIcon from '@images/icons/image-search.svg'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const currentCategory = ref('icon')

const categories = [
  { label: 'All assets', value: 'all-assets', path: '/free-all-assets' },
  { label: 'Icons', value: 'icon', path: '/free-icons' },
  { label: 'Illustrations', value: 'illustration', path: '/free-illustrations' },
  { label: '3D', value: '3d', path: '/free-3d-illustrations' },
  { label: 'Animations', value: 'animation', path: '/free-animations' }
]

const getCategoryDisplayName = () => {
  const category = categories.find((c) => c.value === currentCategory.value)

  return category ? category.label : 'Icons'
}

const setCategory = (categoryValue: string) => {
  if (currentCategory.value !== categoryValue) {
    currentCategory.value = categoryValue
    if (searchQuery.value) {
      handleSearch()
    }
  }
}

onMounted(() => {
  if (route.query.query) {
    searchQuery.value = route.query.query as string
  }

  if (route.path.includes('/free-icons')) {
    currentCategory.value = 'icon'
  } else if (route.path.includes('/free-illustrations')) {
    currentCategory.value = 'illustration'
  } else if (route.path.includes('/free-3d-illustrations')) {
    currentCategory.value = '3d'
  } else if (route.path.includes('/free-animations')) {
    currentCategory.value = 'animation'
  } else if (route.path.includes('/free-all-assets')) {
    currentCategory.value = 'all-assets'
  }
})

watch(
  () => route.query.query,
  (newQuery) => {
    if (newQuery && newQuery !== searchQuery.value) {
      searchQuery.value = newQuery as string
    }
  }
)

const handleSearch = () => {
  if (!searchQuery.value.trim()) return

  const categoryInfo = categories.find((c) => c.value === currentCategory.value)
  const basePath = categoryInfo ? categoryInfo.path : '/free-icons'

  router.push({
    path: basePath,
    query: {
      query: searchQuery.value,
      ...(route.query.price && { price: route.query.price })
    }
  })
}

const menuItems = [
  { name: 'Explore', carret: true },
  { name: 'Tools', carret: true },
  { name: 'All Features', carret: false, url: 'https://iconscout.com/freebies' },
  { name: 'Free Asset', carret: false, icon: GiftIcon },
  { name: 'Learn', carret: true }
]
</script>

<style lang="scss" scoped>
@use './AppHeader.scss';

.app-header__search-dropdown {
  :deep(.btn) {
    background: transparent !important;
    border: none;
    box-shadow: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
}
</style>
