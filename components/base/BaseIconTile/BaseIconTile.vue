<template>
  <div class="icon-tile">
    <img :src="url" :alt="name" class="icon-tile__image" />
    <div class="icon-tile__buttons">
      <button class="icon-tile__button">
        <FolderPlusIcon />
      </button>
      <button class="icon-tile__button">
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
@use './BaseIconTile.scss';
</style>
