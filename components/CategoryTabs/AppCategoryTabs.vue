<template>
  <nav aria-label="Asset categories">
    <ul role="tablist" class="list-unstyled mb-0 d-flex align-items-end gap-4 category-tabs">
      <li v-for="(tab, index) in tabs" :key="index" class="font-size-sm" role="presentation">
        <NuxtLink :to="tab.path" role="tab" :aria-selected="isActive(tab.path)">
          {{ tab.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
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

const route = useRoute()

function isActive(path: string): boolean {
  return route.path === path
}
</script>

<style lang="scss" scoped>
@use './AppCategoryTabs.scss';
</style>
