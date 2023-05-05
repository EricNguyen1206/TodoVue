<!-- component overview
This component render an input element
Props {String} modelValue to reference 
Props {String} className to passing addiontnal class for style with tailwind
Props {String} default to display the default option (diable) 
-->
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String
  },
  placeholder: {
    type: String,
    default: 'Enter text'
  },
  suffixButton: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: 'border rounded w-full py-1 px-2'
  },
  buttonClass: {
    type: String,
    default: 'bg-primary hover:bg-primary-dark text-white'
  }
})

const emit = defineEmits(['update:modelValue', 'enter', 'click'])

/**
 * update value of parent input reference
 * @param {Event} event
 */
const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
/**
 * handle event on input enter
 */
const handleEnter = () => {
  emit('enter', props.modelValue)
}

const handleCLickButton = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('click', target.value)
}
</script>

<!-- UI -->
<template>
  <div class="relative">
    <input
      class="text-base focus:outline"
      :class="className"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      @keyup.enter="handleEnter"
    />
    <div v-if="suffixButton" class="absolute top-[1px] right-[1px] flex items-center max-h-fit">
      <button class="py-0 px-1 rounded" :class="buttonClass" @click="handleCLickButton">
        {{ suffixButton }}
      </button>
    </div>
  </div>
</template>
