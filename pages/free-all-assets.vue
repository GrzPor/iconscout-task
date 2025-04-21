<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <!-- 3D Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">3D Illustrations</h2>
      <div v-if="loading3d && !data3d" class="d-flex flex-wrap gap-1">
        <BaseAssetTileSkeleton v-for="i in 15" :key="i" />
      </div>
      <div v-else-if="data3d" class="d-flex flex-wrap gap-1">
        <BaseAssetTile
          v-for="item in items3d"
          :key="item.id"
          :url="item.urls.thumb"
          :name="item.name"
        />
      </div>
    </section>

    <!-- Illustrations Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">Illustrations</h2>
      <div v-if="loadingIllustrations && !dataIllustrations" class="d-flex flex-wrap gap-1">
        <BaseAssetTileSkeleton v-for="i in 15" :key="i" />
      </div>
      <div v-else-if="dataIllustrations" class="d-flex flex-wrap gap-1">
        <BaseAssetTile
          v-for="item in itemsIllustrations"
          :key="item.id"
          :url="item.urls.thumb"
          :name="item.name"
        />
      </div>
    </section>

    <!-- Icons Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">Icons</h2>
      <div v-if="loadingIcons && !dataIcons" class="d-flex flex-wrap gap-1">
        <BaseIconTileSkeleton v-for="i in 15" :key="i" />
      </div>
      <div v-else-if="dataIcons" class="d-flex flex-wrap gap-1">
        <BaseIconTile
          v-for="item in itemsIcons"
          :key="item.id"
          :url="item.urls.png_128"
          :name="item.name"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import useIconscoutApi from '~/composables/useIconscoutApi'
import { subMenu } from '~/data/mock-data'

import AppHorizontalCategoryMenu from '@components/HorizontalCategoryMenu/AppHorizontalCategoryMenu.vue'
import BaseAssetTile from '@components/base/BaseAssetTile/BaseAssetTile.vue'
import BaseAssetTileSkeleton from '@components/base/BaseAssetTile/BaseAssetTileSkeleton/BaseAssetTileSkeleton.vue'
import BaseIconTile from '@components/base/BaseIconTile/BaseIconTile.vue'
import BaseIconTileSkeleton from '@components/base/BaseIconTile/BaseIconTileSkeleton/BaseIconTileSkeleton.vue'

// 3D assets
const { data: data3d, loading: loading3d, fetchData: fetchData3d } = useIconscoutApi()
const items3d = ref<any[]>([])

// Icons assets
const { data: dataIcons, loading: loadingIcons, fetchData: fetchDataIcons } = useIconscoutApi()
const itemsIcons = ref<any[]>([])

// Illustrations assets
const {
  data: dataIllustrations,
  loading: loadingIllustrations,
  fetchData: fetchDataIllustrations
} = useIconscoutApi()
const itemsIllustrations = ref<any[]>([])

const load3dAssets = async () => {
  await fetchData3d({
    asset: '3d',
    page: 1,
    perPage: 15
  })

  if (data3d.value) {
    items3d.value = [...data3d.value.response.items.data]
  }
}

const loadIconsAssets = async () => {
  await fetchDataIcons({
    asset: 'icon',
    page: 1,
    perPage: 15
  })

  if (dataIcons.value) {
    itemsIcons.value = [...dataIcons.value.response.items.data]
  }
}

const loadIllustrationsAssets = async () => {
  await fetchDataIllustrations({
    asset: 'illustration',
    page: 1,
    perPage: 15
  })

  if (dataIllustrations.value) {
    itemsIllustrations.value = [...dataIllustrations.value.response.items.data]
  }
}

onMounted(() => {
  load3dAssets()
  loadIconsAssets()
  loadIllustrationsAssets()
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/_variables.scss' as *;

.page-title {
  color: $navy-200;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
