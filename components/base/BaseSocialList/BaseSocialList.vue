<template>
  <h5 class="font-size-sm mb-3-4 social-list__title">
    {{ title }}
  </h5>
  <ul
    class="list-unstyled mb-0 d-inline-flex social-list__items"
    role="list"
    aria-labelledby="social media list"
  >
    <li
      v-for="item in items"
      :key="item.link"
      class="d-flex align-items-center justify-content-center"
    >
      <a :href="item.link" target="_blank" rel="noopener noreferrer">
        <component :is="item.icon" aria-hidden="true" />
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
