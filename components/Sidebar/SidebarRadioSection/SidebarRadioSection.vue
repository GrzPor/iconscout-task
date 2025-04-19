<template>
  <div v-for="(item, index) in items" :key="index" class="app-sidebar__wrapper px-4">
    <button
      @click="toggleSection(index)"
      :aria-controls="`collapse-${item.id}`"
      class="w-100 btn-zero app-sidebar__btn"
    >
      <span class="font-size-sm app-sidebar__label"> {{ item.title }} </span>
      <img
        src="@images/icons/angle-up.svg"
        alt="angle-up"
        :class="{ 'rotate-180': !item.isOpen }"
      />
    </button>

    <BCollapse :id="`collapse-${item.id}`" v-model="item.isOpen">
      <BaseRadioInput
        v-for="(subitem, subindex) in item.options"
        :key="subindex"
        :id="subitem.value"
        :name="subitem.name"
        :value="subitem.value"
        :label="subitem.label"
      />
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import BaseRadioInput from '@components/base/BaseRadioInput/BaseRadioInput.vue'

interface SidebarRadioSectionProps {
  items: {
    id: string
    title: string
    isOpen: boolean
    options: {
      name: string
      value: string
      label: string
    }[]
  }[]
}

defineProps({
  items: {
    type: Array as () => SidebarRadioSectionProps['items'],
    required: true
  }
})

const emit = defineEmits(['toggle'])

function toggleSection(index: number) {
  emit('toggle', index)
}
</script>

<style lang="scss" scoped>
@use './SidebarRadioSection.scss';
</style>
