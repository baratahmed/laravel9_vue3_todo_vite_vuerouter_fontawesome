import { createWebHistory, createRouter } from "vue-router";
import  Home  from "./vue/home.vue";

const routes = [
    {
        path: '/',
        name: 'App',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;