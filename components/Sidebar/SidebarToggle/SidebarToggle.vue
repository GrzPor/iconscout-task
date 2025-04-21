<template>
  <button
    class="d-flex align-items-center px-4 py-3-4 button-zero"
    @click="toggleSidebar"
    aria-label="Toggle filters sidebar"
    :aria-expanded="isToggled"
    aria-controls="sidebar-filters"
  >
    <FilterIcon class="me-2" aria-hidden="true" />
    Filters
    <CloseIcon v-if="!isToggled" class="ms-auto" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import FilterIcon from '@images/icons/filter.svg'
import CloseIcon from '@images/icons/close.svg'

const emit = defineEmits(['toggle-sidebar'])
const isToggled = ref(false)

const toggleSidebar = () => {
  isToggled.value = !isToggled.value
  emit('toggle-sidebar')
}
</script>

<style lang="scss" scoped>
@use './SidebarToggle.scss';
</style>
