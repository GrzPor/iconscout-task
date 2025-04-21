<template>
  <div class="app-horizontal-category-menu-container">
    <div class="app-horizontal-category-menu-wrapper" ref="wrapperRef">
      <div class="app-horizontal-category-menu">
        <ul class="list-unstyled mb-0 d-inline-block" ref="menuRef">
          <li v-for="item in menu" :key="item.url" class="app-horizontal-category-menu__item">
            <a :href="item.url" class="app-horizontal-category-menu__link">{{ item.name }}</a>
          </li>
        </ul>
        <div class="app-horizontal-category-menu__arrows">
          <button
            v-if="showLeftArrow"
            class="app-horizontal-category-menu__arrow app-horizontal-category-menu__arrow--left"
            @click="scrollLeft"
          >
            <AngleLeftIcon />
          </button>
          <button
            v-if="showRightArrow"
            class="app-horizontal-category-menu__arrow app-horizontal-category-menu__arrow--right"
            @click="scrollRight"
          >
            <AngleRightIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AngleLeftIcon from '@images/icons/angle-left.svg'
import AngleRightIcon from '@images/icons/angle-right.svg'

defineProps<{
  menu: {
    name: string
    url: string
  }[]
}>()

const wrapperRef = ref<any>(null)
const menuRef = ref<any>(null)
const scrollPosition = ref(0)
const scrollAmount = 500 // pixels to scroll on each arrow click

const showLeftArrow = computed(() => scrollPosition.value > 0)

const showRightArrow = computed(() => {
  if (!wrapperRef.value || !menuRef.value) return

  const wrapperWidth = wrapperRef.value.clientWidth
  const menuWidth = menuRef.value.scrollWidth

  return menuWidth > wrapperWidth && scrollPosition.value < menuWidth - wrapperWidth
})

const scrollLeft = () => {
  if (!wrapperRef.value) return

  scrollPosition.value = Math.max(0, scrollPosition.value - scrollAmount)
  wrapperRef.value.scrollTo({
    left: scrollPosition.value,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  if (!wrapperRef.value || !menuRef.value) return

  const wrapperWidth = wrapperRef.value.clientWidth
  const menuWidth = menuRef.value.scrollWidth
  const maxScroll = menuWidth - wrapperWidth

  scrollPosition.value = Math.min(maxScroll, scrollPosition.value + scrollAmount)
  wrapperRef.value.scrollTo({
    left: scrollPosition.value,
    behavior: 'smooth'
  })
}

const updateScrollPosition = () => {
  if (wrapperRef.value) {
    scrollPosition.value = wrapperRef.value.scrollLeft
  }
}

onMounted(() => {
  if (wrapperRef.value) {
    wrapperRef.value.addEventListener('scroll', updateScrollPosition)
  }
})
</script>

<style lang="scss" scoped>
@use './AppHorizontalCategoryMenu.scss';
</style>
