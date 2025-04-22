<template>
  <div v-for="(item, index) in items" :key="index" class="app-sidebar__wrapper px-4">
    <button
      @click="toggleSection(index)"
      :aria-controls="`collapse-${item.id}`"
      :aria-expanded="item.isOpen"
      class="w-100 btn-zero app-sidebar__btn"
    >
      <span class="font-size-sm app-sidebar__label"> {{ item.title }} </span>
      <AngleUpIcon :class="{ 'rotate-180': !item.isOpen }" aria-hidden="true" />
    </button>

    <BCollapse :id="`collapse-${item.id}`" v-model="item.isOpen">
      <fieldset :aria-labelledby="`heading-${item.id}`">
        <BaseRadioInput
          v-for="(subitem, subindex) in item.options"
          :key="subindex"
          :id="subitem.value"
          :name="subitem.name"
          :value="subitem.value"
          :label="subitem.label"
          :checked="isChecked(subitem.name, subitem.value)"
          @change="onRadioChange(subitem.name, subitem.value)"
        />
      </fieldset>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import BaseRadioInput from '@components/base/BaseRadioInput/BaseRadioInput.vue'
import AngleUpIcon from '@images/icons/angle-up.svg'

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
  selectedValues?: Record<string, string>
}

const props = defineProps({
  items: {
    type: Array as () => SidebarRadioSectionProps['items'],
    required: true
  },
  selectedValues: {
    type: Object as () => Record<string, string>,
    default: () => ({})
  }
})

const emit = defineEmits(['toggle', 'update:selection'])

function toggleSection(index: number) {
  emit('toggle', index)
}

function isChecked(name: string, value: string): boolean {
  if (!props.selectedValues) return false
  return props.selectedValues[name] === value
}

function onRadioChange(name: string, value: string) {
  emit('update:selection', name, value)
}
</script>

<style lang="scss" scoped>
@use './SidebarRadioSection.scss';
</style>
