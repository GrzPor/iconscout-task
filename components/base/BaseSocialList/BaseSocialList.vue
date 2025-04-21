<template>
  <h5 class="font-size-sm mb-3-4 social-list__title">{{ title }}</h5>
  <ul class="list-unstyled mb-0 d-inline-flex social-list__items">
    <li
      v-for="item in items"
      :key="item.link"
      class="d-flex align-items-center justify-content-center"
    >
      <a :href="item.link">
        <component :is="item.icon" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface SocialItem {
  link: string
  icon: any
}

defineProps({
  title: {
    type: String,
    default: null,
    required: true
  },
  items: {
    type: Array as () => SocialItem[],
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use './BaseSocialList.scss';
</style>
