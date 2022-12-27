import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js' // vuex
import {createPinia} from 'pinia' // pinia

import { FontAwesomeIcon } from './plugin/font_awesome'

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
// app.use(store)
app.use(pinia)
app.mount('#app')


