<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'

import BaseButton from './components/BaseButton.vue'
import { initialState } from './store/user/mutations'
import router from './router'

const store = useStore()
const dispatch = store.dispatch
const commit = store.commit

onMounted(() => {
  const userData = sessionStorage.getItem('userData')
  if (userData) {
    const user = JSON.parse(userData)
    dispatch({
      type: 'loginAction',
      payload: {
        username: user.username,
        password: user.password
      }
    })
  }
})

const handleLogout = (e: Event) => {
  e.preventDefault()

  commit('setUser', initialState)
  router.push('login')
}
</script>

<template>
  <main class="container sm:max-w-[1183px] max-w-full mx-auto bg-slate-300 p-4">
    <h1 class="w-full text-black text-4xl pb-[18px] border-b border-gray-300">
      Project 01 - ToDo List <span class="text-gray-500 text-2xl ml-2">VueJS</span>
      <base-button
        @click="handleLogout"
        class-name="float-none sm:float-right mt-4 cursor-pointer border border-primary text-primary hover:text-white hover:bg-primary"
        >Logout</base-button
      >
    </h1>

    <router-view />
  </main>
</template>
