<template>
  <div class="ps-4 base-radio">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      class="base-radio__input"
      @change="handleChange"
    />
    <label :for="id" class="font-size-sm base-radio__label">
      <span>
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
type DOMEvent = globalThis.Event
type DOMInputElement = globalThis.HTMLInputElement

defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: false,
    default: false
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change'])

function handleChange(event: DOMEvent): void {
  if ((event.target as DOMInputElement).checked) {
    emit('change')
  }
}
</script>

<style lang="scss" scoped>
@use './BaseRadioInput.scss';
</style>
