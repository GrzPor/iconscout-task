<template>
  <div class="px-5 py-3">
    <h1>Icons</h1>

    <div v-if="loading" class="d-flex flex-wrap gap-1">
      <BaseIconTileSkeleton v-for="i in perPage" :key="i" />
    </div>

    <div v-else-if="data" class="d-flex flex-wrap gap-1">
      <BaseIconTile
        v-for="icon in data.response.items.data"
        :key="icon.id"
        :url="icon.urls.png_128"
        :name="icon.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useIconscoutApi from '~/composables/useIconscoutApi'
import BaseIconTile from '~/components/base/BaseIconTile/BaseIconTile.vue'
import BaseIconTileSkeleton from '~/components/base/BaseIconTile/BaseIconTileSkeleton/BaseIconTileSkeleton.vue'

const { data, loading, fetchData } = useIconscoutApi()
const page = ref(1)
const perPage = ref(50)

const loadPage = async (newPage: number) => {
  page.value = newPage
  await fetchData({
    asset: 'icon',
    page: page.value,
    perPage: perPage.value
  })
}

onMounted(() => {
  loadPage(1)
})
</script>
