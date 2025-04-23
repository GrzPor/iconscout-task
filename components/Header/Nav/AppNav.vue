<template>
  <nav class="w-100 app-nav" aria-label="Main navigation">
    <ul class="list-unstyled mb-0 d-flex align-items-center">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="d-flex align-items-center me-3 me-xxl-4"
      >
        <a :href="item.url || '#'" :aria-label="item.carret ? `${item.name} menu` : undefined">
          <component v-if="item.icon" :is="item.icon" :filled="true" aria-hidden="true" />
          {{ item.name }}
          <AngleDownIcon v-if="item.carret" aria-hidden="true" />
        </a>
      </li>
      <li class="app-nav__button">
        <BButton pill variant="outline-secondary">Login</BButton>
      </li>
      <li>
        <BButton pill variant="primary">Sign up</BButton>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import GiftIcon from '@images/icons/gift.svg'
import AngleDownIcon from '@images/icons/angle-down.svg'

const menuItems = [
  { name: 'Explore', carret: true },
  { name: 'Tools', carret: true },
  { name: 'All Features', carret: false, url: 'https://iconscout.com/freebies' },
  { name: 'Free Asset', carret: false, icon: GiftIcon },
  { name: 'Learn', carret: true }
]
</script>

<style lang="scss" scoped>
@use './AppNav.scss';
</style>
