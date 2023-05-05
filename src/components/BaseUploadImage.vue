<!-- component overview
Render a Input type file and dislay the image uploaded
The input can click or drop to upload file
User can change the image by upload other file
Props {String} className to passing addiontnal class for style with tailwind 
-->
<script setup lang="ts">
import { ref } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)
const imageUrl = ref<string | null>(null)

defineProps({
  className: {
    type: String,
    default: 'border rounded w-full py-1 px-2'
  }
})

/**
 * update the image on upload new file
 * @param event - value of file input
 */
const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imageUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="relative flex items-center justify-center cursor-pointer" :class="className">
    <input
      ref="inputRef"
      type="file"
      class="absolute inset-0 opacity-0"
      @change="handleFileSelect"
    />
    <div class="flex flex-col items-center justify-center space-y-4">
      <div
        v-if="!imageUrl"
        class="w-24 h-24 flex justify-center items-center rounded-full bg-gray-300 cursor-pointer"
      >
        <svg
          class="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div>
      <img v-if="imageUrl" :src="imageUrl" class="w-24 h-24 object-cover" />
      <!-- <button
        @click="handleClick"
        type="button"
        class="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      > -->
      <!-- {{ imageUrl ? 'Change Image' : 'Upload Image' }} -->
      <!-- <font-awesome-icon icon="fa-solid fa-plus" />
      </button> -->
    </div>
  </div>
</template>
