<template>
  <div class="icon-tile">
    <div v-if="redirectUrl" class="icon-tile__overlay">
      <p class="icon-tile__redirect-text">
        View more
        <ArrowTopRightIcon aria-hidden="true" />
      </p>
    </div>
    <a :href="redirectUrl || '#'" class="icon-tile__link">
      <img :src="url" :alt="name" class="icon-tile__image" />
      <div class="icon-tile__buttons">
        <button class="icon-tile__button" aria-label="Add to collection">
          <FolderPlusIcon aria-hidden="true" />
        </button>
        <button class="icon-tile__button" aria-label="Download icon">
          <DownloadIcon aria-hidden="true" />
        </button>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import ArrowTopRightIcon from '@images/icons/arrow-top-right.svg'
import FolderPlusIcon from '@images/icons/folder-plus.svg'
import DownloadIcon from '@images/icons/download.svg'

defineProps<{
  url: string
  name: string
  redirectUrl?: string
}>()
</script>

<style lang="scss" scoped>
@use './BaseIconTile.scss';
</style>
