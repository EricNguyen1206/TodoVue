<!-- component overview
This component render a tag component
Props {String} className to passing addiontnal class for style with tailwind
The component will hide if slots empty
-->
<script setup lang="ts">
const props = defineProps({
  className: {
    type: String,
    default: 'bg-gray-200 text-gray-700'
  }
})
</script>

<template>
  <span
    class="px-1 py-0 inline-block font-semibold text-sm align-center rounded"
    :class="props.className"
  >
    <slot></slot>
  </span>
</template>
