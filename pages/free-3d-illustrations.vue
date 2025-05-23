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
  title: 'Free 3D Illustrations - Browse and Download Free 3D Illustrations from Iconscout',
  meta: [
    {
      name: 'description',
      content:
        'Discover and download high-quality free 3D illustrations for your design projects. Browse our extensive collection of professional 3D illustrations in various styles and formats.'
    },
    {
      name: 'keywords',
      content:
        'free 3D illustrations, 3D graphics, 3D design, vector illustrations, web illustrations, UI illustrations, UX illustrations, download illustrations'
    },
    {
      property: 'og:title',
      content: 'Free 3D Illustrations - Browse and Download Free 3D Illustrations from Iconscout'
    },
    {
      property: 'og:description',
      content: 'Discover and download high-quality free 3D illustrations for your design projects.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'localhost:3000/free-3d-illustrations' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Free 3D Illustrations - Browse and Download Free 3D Illustrations from Iconscout'
    },
    {
      name: 'twitter:description',
      content: 'Discover and download high-quality free 3D illustrations for your design projects.'
    }
  ],
  link: [{ rel: 'canonical', href: 'http://localhost:3000/free-3d-illustrations' }]
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

const loadPage = async (pageNum: number) => {
  const searchTerm = route.query.query || ''
  const priceFilter = route.query.price || undefined

  await fetchData({
    asset: '3d',
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
