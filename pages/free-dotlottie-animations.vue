<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <div class="my-3">
      <div v-if="loading && !data" class="tile-grid-asset">
        <BaseAssetTileSkeleton v-for="i in perPage" :key="i" />
      </div>
      <div v-else-if="data" class="tile-grid-asset">
        <dotlottie-wc
          v-for="item in allItems"
          class="lottie-player"
          autoplay="true"
          loop="true"
          :src="item.urls.lottie"
        />
      </div>

      <div v-if="isLoading" class="d-flex justify-content-center my-3">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useIconscoutApi from '@composables/useIconscoutApi'
import useInfiniteScroll from '@composables/useInfiniteScroll'
import { subMenu } from '@data/mock-data'

import AppHorizontalCategoryMenu from '@components/HorizontalCategoryMenu/AppHorizontalCategoryMenu.vue'
import BaseAssetTileSkeleton from '@components/base/BaseAssetTile/BaseAssetTileSkeleton/BaseAssetTileSkeleton.vue'

useHead({
  title: 'Free Lottie Animations - Browse and Download Free Lottie Animations from Iconscout',
  meta: [
    {
      name: 'description',
      content:
        'Discover and download high-quality free Lottie animations for your design projects. Browse our extensive collection of professional animations in various styles and formats.'
    },
    {
      name: 'keywords',
      content:
        'free lottie animations, animation pack, animation design, vector animations, web animations, UI animations, UX animations, download animations'
    },
    {
      property: 'og:title',
      content: 'Free Lottie Animations - Browse and Download Free Lottie Animations from Iconscout'
    },
    {
      property: 'og:description',
      content: 'Discover and download high-quality free Lottie animations for your design projects.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'localhost:3000/free-lottie-animations' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Free Lottie Animations - Browse and Download Free Lottie Animations from Iconscout'
    },
    {
      name: 'twitter:description',
      content: 'Discover and download high-quality free Lottie animations for your design projects.'
    }
  ],
  link: [{ rel: 'canonical', href: 'http://localhost:3000/free-lottie-animations' }]
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

const { isLoading } = useInfiniteScroll(loadNextPage, {
  threshold: 200,
  bannerDelay: 0,
  maxLoads: Infinity,
  showBanner: false
})

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
    asset: 'lottie',
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
