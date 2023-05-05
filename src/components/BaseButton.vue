<!-- component overview
Render a button
Props {String} className to passing addiontnal class for style with tailwind
-->
<script setup lang="ts">
const props = defineProps({
  className: {
    type: String,
    default: 'bg-primary hover:bg-primary-dark text-white'
  }
})
const emit = defineEmits(['click'])

/**
 * Click button event handler
 * @param param forward this value to handle event in parent component
 */
const handleClick = (param: any) => {
  emit('click', param)
}
</script>

<template>
  <button
    class="py-1 px-2 rounded text-base h-fit w-fit"
    :class="props.className"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
