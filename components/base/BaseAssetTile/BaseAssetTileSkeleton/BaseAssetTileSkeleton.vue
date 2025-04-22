<template>
  <div
    role="img"
    aria-label="Loading asset"
    aria-busy="true"
    :class="['asset-tile-skeleton', { 'asset-tile-skeleton--icon': isIconVariant }]"
  ></div>
</template>

<script setup lang="ts">
import type { Variant } from '~/types'

const props = withDefaults(
  defineProps<{
    variant: Variant
  }>(),
  {
    variant: 'asset'
  }
)

const isIconVariant = computed(() => props.variant === 'icon')
</script>

<style lang="scss" scoped>
@use './BaseAssetTileSkeleton.scss';
</style>
