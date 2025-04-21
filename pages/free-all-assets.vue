<template>
  <div>
    <AppHorizontalCategoryMenu :menu="subMenu" />

    <!-- 3D Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">3D Illustrations</h2>
      <div v-if="loading3d && !data3d" class="tile-grid-asset">
        <BaseAssetTileSkeleton v-for="i in 20" :key="i" />
      </div>
      <div v-else-if="data3d" class="tile-grid-asset">
        <BaseAssetTile
          v-for="(item, index) in items3d"
          :key="item.id"
          :url="item.urls.thumb"
          :name="item.name"
          :redirect-url="checkIfItLastItem(item, index, items3d)"
        />
      </div>
    </section>

    <!-- Illustrations Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">Illustrations</h2>
      <div v-if="loadingIllustrations && !dataIllustrations" class="tile-grid-asset">
        <BaseAssetTileSkeleton v-for="i in 15" :key="i" />
      </div>
      <div v-else-if="dataIllustrations" class="tile-grid-asset">
        <BaseAssetTile
          v-for="(item, index) in itemsIllustrations"
          :key="item.id"
          :url="item.urls.thumb"
          :name="item.name"
          :redirect-url="checkIfItLastItem(item, index, itemsIllustrations)"
        />
      </div>
    </section>

    <!-- Icons Section -->
    <section class="my-4">
      <h2 class="mb-3 page-title">Icons</h2>
      <div v-if="loadingIcons && !dataIcons" class="tile-grid-icon">
        <BaseIconTileSkeleton v-for="i in 15" :key="i" />
      </div>
      <div v-else-if="dataIcons" class="tile-grid-icon">
        <BaseIconTile
          v-for="(item, index) in itemsIcons"
          :key="item.id"
          :url="item.urls.png_128"
          :name="item.name"
          :redirect-url="checkIfItLastItem(item, index, itemsIcons)"
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

useHead({
  title: 'Free Design Assets - Browse Icons, Illustrations and 3D Graphics from Iconscout',
  meta: [
    {
      name: 'description',
      content:
        'Discover and download high-quality free design assets for your projects. Browse our extensive collection of icons, illustrations, and 3D graphics in various styles and formats.'
    },
    {
      name: 'keywords',
      content:
        'free design assets, icon pack, illustrations, 3D graphics, vector icons, web icons, UI design, UX design, download assets'
    },
    {
      property: 'og:title',
      content: 'Free Design Assets - Browse Icons, Illustrations and 3D Graphics from Iconscout'
    },
    {
      property: 'og:description',
      content: 'Discover and download high-quality free design assets for your projects.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'localhost:3000/free-all-assets' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Free Design Assets - Browse Icons, Illustrations and 3D Graphics from Iconscout'
    },
    {
      name: 'twitter:description',
      content: 'Discover and download high-quality free design assets for your projects.'
    }
  ],
  link: [{ rel: 'canonical', href: 'http://localhost:3000/free-all-assets' }]
})

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
    perPage: 20
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

const checkIfItLastItem = (item: any, index: number, items: any[]) => {
  if (index === items.length - 1) {
    switch (item.asset) {
      case '3d':
        return '/free-3d-illustrations'
      case 'icon':
        return '/free-icons'
      case 'illustration':
        return '/free-illustrations'
      default:
        return null
    }
  }

  return null
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
