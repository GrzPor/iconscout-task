<template>
  <h5 class="font-size-sm mb-3-4 nav-list__title">
    {{ title }}
  </h5>
  <ul class="list-unstyled nav-list__items" role="list" aria-labelledby="nav title">
    <li v-for="item in items" :key="item.name" class="mb-1">
      <a :href="item.link" class="font-size-sm">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface NavItem {
  name: string
  link: string
}

defineProps({
  title: {
    type: String,
    default: null,
    required: true
  },
  items: {
    type: Array as () => NavItem[],
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use './BaseNavList.scss';
</style>
