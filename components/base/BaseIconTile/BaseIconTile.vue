<template>
  <div class="icon-tile">
    <img :src="url" :alt="name" class="icon-tile__image" />
    <div class="icon-tile__buttons">
      <button class="icon-tile__button">
        <img src="@images/icons/folder-plus.svg" alt="folder-plus" />
      </button>
      <button class="icon-tile__button">
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
@use './BaseIconTile.scss';
</style>
