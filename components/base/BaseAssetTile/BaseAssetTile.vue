<template>
  <div class="asset-tile">
    <img :src="url" :alt="name" class="asset-tile__image" />
    <p class="font-size-xs mb-0 asset-tile__name">{{ name }}</p>
    <div class="asset-tile__buttons" role="group" aria-label="Asset actions">
      <button class="asset-tile__button" aria-label="Add to collection" title="Add to collection">
        <FolderPlusIcon aria-hidden="true" />
      </button>
      <button class="asset-tile__button" aria-label="Download asset" title="Download asset">
        <DownloadIcon aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FolderPlusIcon from '@images/icons/folder-plus.svg'
import DownloadIcon from '@images/icons/download.svg'

defineProps<{
  url: string
  name: string
}>()
</script>

<style lang="scss" scoped>
@use './BaseAssetTile.scss';
</style>
