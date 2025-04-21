<template>
  <div>
    <div v-if="loading && !data" class="d-flex flex-wrap gap-1">
      <BaseAssetTileSkeleton v-for="i in perPage" :key="i" />
    </div>

    <div v-else-if="data" class="d-flex flex-wrap gap-1">
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

    <AppSignupBlurBanner v-if="showSignupBanner" />
  </div>
</template>

<script setup lang="ts">
import useIconscoutApi from '~/composables/useIconscoutApi'
import useInfiniteScroll from '~/composables/useInfiniteScroll'
import BaseAssetTile from '~/components/base/BaseAssetTile/BaseAssetTile.vue'
import BaseAssetTileSkeleton from '~/components/base/BaseAssetTile/BaseAssetTileSkeleton/BaseAssetTileSkeleton.vue'
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
    asset: '3d',
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
