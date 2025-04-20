<template>
  <div class="px-5 py-3">
    <h1>3D Illustrations</h1>

    <div v-if="loading" class="d-flex flex-wrap gap-1">
      <BaseAssetTileSkeleton v-for="i in perPage" :key="i" />
    </div>

    <div v-else-if="data" class="d-flex flex-wrap gap-1">
      <BaseAssetTile
        v-for="item in data.response.items.data"
        :key="item.id"
        :url="item.urls.thumb"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useIconscoutApi from '~/composables/useIconscoutApi'
import BaseAssetTile from '~/components/base/BaseAssetTile/BaseAssetTile.vue'
import BaseAssetTileSkeleton from '~/components/base/BaseAssetTile/BaseAssetTileSkeleton/BaseAssetTileSkeleton.vue'

const { data, loading, fetchData } = useIconscoutApi()
const page = ref(1)
const perPage = ref(50)

const loadPage = async (newPage: number) => {
  page.value = newPage
  await fetchData({
    asset: '3d',
    page: page.value,
    perPage: perPage.value
  })
}

onMounted(() => {
  loadPage(1)
})
</script>
