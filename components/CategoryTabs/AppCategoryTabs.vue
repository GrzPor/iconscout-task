<template>
  <ul role="tablist" class="list-unstyled mb-0 d-flex align-items-end gap-4 category-tabs">
    <li v-for="(tab, index) in tabs" :key="index" class="font-size-sm" role="presentation">
      <NuxtLink :to="tab.path" role="tab">
        {{ tab.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Tab {
  path: string
  name: string
}

defineProps({
  tabs: {
    type: Array as () => Tab[],
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use './AppCategoryTabs.scss';
</style>
