<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toast-notification'
import { RouterLink } from 'vue-router'

import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

const store = useStore()
const username = ref<string>('')
const password = ref<string>('')

const handleSubmit = (e: Event) => {
  e.preventDefault()
  if (username.value == '' || password.value == '') {
    const $toast = useToast()
    $toast.warning('Username and password are required!')
  } else {
    store.dispatch({
      type: 'loginAction',
      payload: {
        username: username.value,
        password: password.value
      }
    })
  }
}
</script>

<template>
  <div class="mt-4 relative flex flex-col justify-center overflow-hidden">
    <div
      class="w-full p-6 m-auto bg-white border-t border-primary-dark rounded shadow-lg shadow-primary-800/50 lg:max-w-md"
    >
      <h1 class="text-3xl font-semibold text-center text-primary">LOGO</h1>

      <form class="mt-6">
        <div>
          <label for="username" class="block text-sm text-gray-800"
            >Username</label
          >
          <base-input
            v-model="username"
            class-name="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <input
              type="password"
              v-model="password"
              class="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline"
            >Forget Password?</a
          >
          <div class="mt-6">
            <base-button
              @click="handleSubmit"
              class-name="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
            >
              Login
            </base-button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <router-link
          to="/register"
          class="font-medium text-primary-dark hover:underline"
        >
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>
