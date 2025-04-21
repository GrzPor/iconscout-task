<template>
  <div class="asset-tile">
    <img :src="url" :alt="name" class="asset-tile__image" />
    <p class="font-size-xs mb-0 asset-tile__name">{{ name }}</p>
    <div class="asset-tile__buttons">
      <button class="asset-tile__button">
        <FolderPlusIcon />
      </button>
      <button class="asset-tile__button">
        <DownloadIcon />
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
