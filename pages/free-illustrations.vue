<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <div class="my-3">
      <div v-if="loading && !data" class="tile-grid-asset">
        <BaseAssetTileSkeleton v-for="i in perPage" :key="i" />
      </div>

      <div v-else-if="data" class="tile-grid-asset">
        <BaseAssetTile
          v-for="item in allItems"
          :key="item.id"
          :url="item.urls.thumb"
          :name="item.name"
        />
      </div>

      <div v-if="isLoading" class="d-flex justify-content-center my-3">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
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

useHead({
  title: 'Free Illustrations - Browse and Download Free Illustrations from Iconscout',
  meta: [
    {
      name: 'description',
      content:
        'Discover and download high-quality free illustrations for your design projects. Browse our extensive collection of professional illustrations in various styles and formats.'
    },
    {
      name: 'keywords',
      content:
        'free illustrations, illustration pack, illustration design, vector illustrations, web illustrations, UI illustrations, UX illustrations, download illustrations'
    },
    {
      property: 'og:title',
      content: 'Free Illustrations - Browse and Download Free Illustrations from Iconscout'
    },
    {
      property: 'og:description',
      content: 'Discover and download high-quality free illustrations for your design projects.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'localhost:3000/free-illustrations' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Free Illustrations - Browse and Download Free Illustrations from Iconscout'
    },
    {
      name: 'twitter:description',
      content: 'Discover and download high-quality free illustrations for your design projects.'
    }
  ],
  link: [{ rel: 'canonical', href: 'http://localhost:3000/free-illustrations' }]
})

const { data, loading, fetchData } = useIconscoutApi()
const route = useRoute()
const page = ref(1)
const perPage = ref(50)
const allItems = ref<any[]>([])

const loadNextPage = () => {
  page.value++
  loadPage(page.value)
}

const { isLoading, showSignupBanner } = useInfiniteScroll(loadNextPage)

const parseApiResponse = (apiData: any): any[] => {
  if (!apiData) {
    return []
  }

  if (Array.isArray(apiData.data)) {
    return apiData.data
  } else if (apiData.response?.items?.data && Array.isArray(apiData.response.items.data)) {
    return apiData.response.items.data
  } else if (apiData.items?.data && Array.isArray(apiData.items.data)) {
    return apiData.items.data
  } else if (apiData.items && Array.isArray(apiData.items)) {
    return apiData.items
  }

  return []
}

const loadPage = async (pageNum: number) => {
  const searchTerm = route.query.query || ''
  const priceFilter = route.query.price || undefined

  await fetchData({
    asset: 'illustration',
    page: pageNum,
    perPage: perPage.value,
    searchTerm: searchTerm as string,
    price: priceFilter as string
  })

  if (data.value) {
    const parsedData = parseApiResponse(data.value)

    if (pageNum === 1) {
      allItems.value = [...parsedData]
    } else {
      allItems.value = [...allItems.value, ...parsedData]
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
