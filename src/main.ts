import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './modules/core/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ToastPlugin, {
  position: 'top'
})
app.mount('#app')
