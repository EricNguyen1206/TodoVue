import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { auth: false }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: { auth: false }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: { auth: false }
    }
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.meta.auth && store.getters.username == '') {
    next('/login')
  } else {
    next()
  }
})

export default router
