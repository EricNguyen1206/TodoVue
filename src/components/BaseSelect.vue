<!-- component overview
This component render an select option element
Props {Option[]} options to render list of option
Props {String} className to passing addiontnal class for style with tailwind
Props {String} default to display the default option (diable) 
-->
<script setup lang="ts">
import type { Option } from '../declaration'
const emit = defineEmits(['change'])
const props = defineProps({
  options: {
    type: Array as () => Option[],
    required: true
  },
  className: {
    type: String,
    default:
      'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
  },
  default: {
    type: String
  }
})

const handleChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement
  emit('change', target.value)
}
</script>

<template>
  <select class="text-base h-fit focus:outline" :class="props.className" @change="handleChange">
    <option selected="true" disabled v-if="default">{{ default }}</option>
    <option v-for="(option, index) in props.options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
