<template>
  <header class="container-fluid d-flex align-items-center py-3-4 px-4 app-header">
    <a href="/" class="app-header__logo mb-5-5">
      <img src="@images/brand/iconscout_logo_for_white_bg.svg" alt="IconScout" />
    </a>
    <div class="app-header__search">
      <div class="d-flex align-items-center pe-2 me-2 app-header__search-dropdown">
        <span>3D</span>
        <img src="@images/icons/angle-down.svg" alt="Arrow Down" class="ms-1" />
      </div>
      <div class="d-flex align-items-center">
        <img src="@images/icons/search.svg" alt="Search" class="me-2" />
        <input class="app-header__search-input" placeholder="Search from 8 Million+ assets" />
        <button class="app-header__search-button rounded-2">
          <img src="@images/icons/image-search.svg" alt="image search" />
        </button>
      </div>
    </div>
    <nav class="w-100 app-header__nav">
      <ul class="list-unstyled mb-0 d-flex align-items-center">
        <li v-for="item in menuItems" :key="item.name" class="d-flex align-items-center me-4">
          <a :href="item.url || '#'">
            <img v-if="item.icon" :src="item.icon" :alt="item.icon" />
            {{ item.name }}
            <img v-if="item.carret" src="@images/icons/angle-down.svg" alt="Arrow Down" />
          </a>
        </li>
        <li class="d-flex ms-auto me-3-4">
          <BButton pill variant="outline-secondary">Login</BButton>
        </li>
        <li>
          <BButton pill variant="primary">Sign up</BButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import giftIcon from '@images/icons/gift.svg'

const menuItems = [
  { name: 'Explore', carret: true },
  { name: 'Tools', carret: true },
  { name: 'All Features', carret: false, url: 'https://iconscout.com/freebies' },
  { name: 'Free Asset', carret: false, icon: giftIcon },
  { name: 'Learn', carret: true }
]
</script>

<style lang="scss" scoped>
@use './AppHeader.scss';
</style>
