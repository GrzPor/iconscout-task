<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <div class="my-3">
      <div v-if="loading && !data" class="d-flex flex-wrap gap-1">
        <BaseIconTileSkeleton v-for="i in perPage" :key="i" />
      </div>

      <div v-else-if="data" class="d-flex flex-wrap gap-1">
        <BaseIconTile
          v-for="icon in allItems"
          :key="icon.id"
          :url="icon.urls.png_128"
          :name="icon.name"
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
import useIconscoutApi from '~/composables/useIconscoutApi'
import useInfiniteScroll from '~/composables/useInfiniteScroll'
import { subMenu } from '~/data/mock-data'

import AppHorizontalCategoryMenu from '@components/HorizontalCategoryMenu/AppHorizontalCategoryMenu.vue'
import BaseIconTile from '~/components/base/BaseIconTile/BaseIconTile.vue'
import BaseIconTileSkeleton from '~/components/base/BaseIconTile/BaseIconTileSkeleton/BaseIconTileSkeleton.vue'
import AppSignupBlurBanner from '~/components/SignupBlurBanner/AppSignupBlurBanner.vue'

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
  await fetchData({
    asset: 'icon',
    page: pageNum,
    perPage: perPage.value
  })

  if (data.value) {
    if (pageNum === 1) {
      allItems.value = [...data.value.response.items.data]
    } else {
      allItems.value = [...allItems.value, ...data.value.response.items.data]
    }
  }
}

onMounted(() => {
  loadPage(1)
})
</script>
