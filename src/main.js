import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'
import AOS from 'aos'

import './assets/scss/app.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({
  once: true,
  offset: 50,
});
