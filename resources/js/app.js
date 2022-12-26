import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import { FontAwesomeIcon } from './plugin/font_awesome'

const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')


