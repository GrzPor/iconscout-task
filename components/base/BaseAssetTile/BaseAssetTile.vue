<template>
  <div class="asset-tile">
    <img :src="url" :alt="name" class="asset-tile__image" />
    <p class="font-size-xs mb-0 asset-tile__name">{{ name }}</p>
    <div class="asset-tile__buttons">
      <button class="asset-tile__button">
        <img src="@images/icons/folder-plus.svg" alt="folder-plus" />
      </button>
      <button class="asset-tile__button">
        <img src="@images/icons/download.svg" alt="download" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  url: string
  name: string
}>()
</script>

<style lang="scss" scoped>
@use './BaseAssetTile.scss';
</style>
