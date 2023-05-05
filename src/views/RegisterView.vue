<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { useToast } from 'vue-toast-notification'

import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

const dispatch = useStore().dispatch
const username = ref<string>('')
const password = ref<string>('')
const confirm = ref<string>('')

const handleRegister = (e: Event) => {
  e.preventDefault()
  const $toast = useToast()
  if (username.value == '' || password.value == '') {
    $toast.warning('Username and password are required!')
  } else if (password.value !== confirm.value) {
    $toast.warning('You enter wrong confirm password!\n Plese confirm again!')
  } else {
    dispatch({
      type: 'registerAction',
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
          <label for="username" class="block text-sm text-gray-800">Username</label>
          <base-input
            v-model="username"
            class-name="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>

        <div class="mt-4">
          <label for="password" class="block text-sm text-gray-800">Password</label>
          <input
            v-model="password"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-4">
          <label for="password" class="block text-sm text-gray-800">Confirm Password</label>
          <input
            v-model="confirm"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary-dark focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-6">
          <base-button
            @click="handleRegister"
            class-name="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
          >
            Sign up
          </base-button>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        I have an account -
        <router-link to="/login" class="font-medium text-primary-dark hover:underline">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<style lang=""></style>
