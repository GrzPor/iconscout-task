<template>
  <button class="d-flex align-items-center px-4 py-3-4 button-zero">
    <FilterIcon class="me-2" />
    Filters
    <CloseIcon class="ms-auto" />
  </button>
</template>

<script setup lang="ts">
import FilterIcon from '@images/icons/filter.svg'
import CloseIcon from '@images/icons/close.svg'
</script>

<style lang="scss" scoped>
@use './SidebarToggle.scss';
</style>
