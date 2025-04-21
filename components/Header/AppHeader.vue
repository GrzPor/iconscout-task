<template>
  <header class="container-fluid d-flex align-items-center py-3-4 px-4 app-header" role="banner">
    <a href="/" class="app-header__logo mb-5-5">
      <img src="/assets/images/brand/iconscout_logo_for_white_bg.svg" alt="IconScout" />
    </a>
    <div class="app-header__search" role="search">
      <div
        class="d-flex align-items-center pe-2 me-2 app-header__search-dropdown"
        role="button"
        tabindex="0"
        aria-label="Choose search category"
      >
        <span>3D</span>
        <AngleDownIcon class="ms-1" aria-hidden="true" />
      </div>
      <div class="d-flex align-items-center">
        <SearchIcon class="me-2" filled aria-hidden="true" />
        <input
          class="app-header__search-input"
          placeholder="Search from 8 Million+ assets"
          aria-label="Search assets"
        />
        <button class="app-header__search-button rounded-2" aria-label="Visual search">
          <ImageSearchIcon aria-hidden="true" />
        </button>
      </div>
    </div>
    <nav class="w-100 app-header__nav" aria-label="Main navigation">
      <ul class="list-unstyled mb-0 d-flex align-items-center">
        <li v-for="item in menuItems" :key="item.name" class="d-flex align-items-center me-4">
          <a :href="item.url || '#'" :aria-label="item.carret ? `${item.name} menu` : undefined">
            <component v-if="item.icon" :is="item.icon" :filled="true" aria-hidden="true" />
            {{ item.name }}
            <AngleDownIcon v-if="item.carret" aria-hidden="true" />
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
import GiftIcon from '@images/icons/gift.svg'
import AngleDownIcon from '@images/icons/angle-down.svg'
import SearchIcon from '@images/icons/search.svg'
import ImageSearchIcon from '@images/icons/image-search.svg'

const menuItems = [
  { name: 'Explore', carret: true },
  { name: 'Tools', carret: true },
  { name: 'All Features', carret: false, url: 'https://iconscout.com/freebies' },
  { name: 'Free Asset', carret: false, icon: GiftIcon },
  { name: 'Learn', carret: true }
]
</script>

<style lang="scss" scoped>
@use './AppHeader.scss';
</style>
