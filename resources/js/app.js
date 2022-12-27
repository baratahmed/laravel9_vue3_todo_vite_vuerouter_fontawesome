import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import { FontAwesomeIcon } from './plugin/font_awesome'

const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')


