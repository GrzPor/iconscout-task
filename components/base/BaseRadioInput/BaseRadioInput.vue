<template>
  <div class="ps-4 base-radio">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      class="base-radio__input"
    />
    <label :for="id" class="font-size-sm base-radio__label">
      <span>
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped>
@use './BaseRadioInput.scss';
</style>
