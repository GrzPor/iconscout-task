<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <div class="my-3">
      <div
        v-if="loading && !data"
        class="tile-grid-icon"
        aria-busy="true"
        aria-label="Loading icons"
      >
        <BaseAssetTileSkeleton v-for="i in perPage" :key="i" variant="icon" />
      </div>

      <div v-else-if="data" class="tile-grid-icon" role="region" aria-label="Icon gallery">
        <BaseAssetTile
          v-for="icon in allItems"
          :key="icon.id"
          :url="icon.urls.png_128"
          :name="icon.name"
          variant="icon"
        />
      </div>

      <div v-if="isLoading" class="d-flex justify-content-center my-3" aria-live="polite">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading more icons...</span>
        </div>
      </div>
    </div>

    <AppSignupBlurBanner v-if="showSignupBanner" />
  </div>
</template>

<script setup lang="ts">
import useIconscoutApi from '@composables/useIconscoutApi'
import useInfiniteScroll from '@composables/useInfiniteScroll'
import { subMenu } from '@data/mock-data'

import AppHorizontalCategoryMenu from '@components/HorizontalCategoryMenu/AppHorizontalCategoryMenu.vue'
import BaseAssetTile from '@components/base/BaseAssetTile/BaseAssetTile.vue'
import BaseAssetTileSkeleton from '@components/base/BaseAssetTile/BaseAssetTileSkeleton/BaseAssetTileSkeleton.vue'
import AppSignupBlurBanner from '@components/SignupBlurBanner/AppSignupBlurBanner.vue'

const route = useRoute()

useHead({
  title: 'Free Icons - Browse and Download Free Icons from Iconscout',
  meta: [
    {
      name: 'description',
      content:
        'Discover and download high-quality free icons for your design projects. Browse our extensive collection of professional icons in various styles and formats.'
    },
    {
      name: 'keywords',
      content:
        'free icons, icon pack, icon design, vector icons, web icons, UI icons, UX icons, download icons'
    },
    { property: 'og:title', content: 'Free Icons - Browse and Download Free Icons from Iconscout' },
    {
      property: 'og:description',
      content: 'Discover and download high-quality free icons for your design projects.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'localhost:3000/free-icons' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Free Icons - Browse and Download Free Icons from Iconscout'
    },
    {
      name: 'twitter:description',
      content: 'Discover and download high-quality free icons for your design projects.'
    }
  ],
  link: [{ rel: 'canonical', href: 'http://localhost:3000/free-icons' }]
})

const { data, loading, fetchData } = useIconscoutApi()
const page = ref(1)
const perPage = ref(50)
const allItems = ref<any[]>([])

const loadNextPage = () => {
  page.value++
  loadPage(page.value)
}

const { isLoading, showSignupBanner } = useInfiniteScroll(loadNextPage)

const loadPage = async (pageNum: number) => {
  const searchTerm = route.query.query || ''
  const priceFilter = route.query.price || undefined

  await fetchData({
    asset: 'icon',
    page: pageNum,
    perPage: perPage.value,
    searchTerm: searchTerm as string,
    price: priceFilter as string
  })

  const res = data.value.response.items.data

  if (res && Array.isArray(res)) {
    if (pageNum === 1) {
      allItems.value = [...res]
    } else {
      allItems.value = [...allItems.value, ...res]
    }
  }
}

watch(
  () => route.query,
  () => {
    page.value = 1
    loadPage(1)
  },
  { deep: true, immediate: true }
)
</script>
