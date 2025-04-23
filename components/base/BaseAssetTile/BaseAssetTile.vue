<template>
  <div class="asset-tile" :class="{ 'asset-tile--icon': isIconVariant }">
    <div v-if="redirectUrl" class="asset-tile__overlay">
      <p class="asset-tile__redirect-text">
        View more
        <ArrowTopRightIcon aria-hidden="true" />
      </p>
    </div>
    <a :href="redirectUrl || '#'" class="asset-tile__link">
      <video v-if="isVideo" :src="url" autoplay muted loop class="asset-tile__image" />
      <img v-else :src="url" :alt="name" class="asset-tile__image" />
      <p v-if="!isIconVariant" class="font-size-xs mb-0 asset-tile__name">{{ name }}</p>
      <div class="asset-tile__buttons" role="group" aria-label="Asset actions">
        <button class="asset-tile__button" aria-label="Add to collection" title="Add to collection">
          <FolderPlusIcon aria-hidden="true" />
        </button>
        <button class="asset-tile__button" aria-label="Download asset" title="Download asset">
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
import type { Variant } from '~/types'

const props = withDefaults(
  defineProps<{
    url: string
    name: string
    variant?: Variant
    redirectUrl?: string
    isVideo?: boolean
  }>(),
  {
    variant: 'asset'
  }
)

const isIconVariant = computed(() => props.variant === 'icon')
</script>

<style lang="scss" scoped>
@use './BaseAssetTile.scss';
</style>
