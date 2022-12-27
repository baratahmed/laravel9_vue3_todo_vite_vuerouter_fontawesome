import { createWebHistory, createRouter } from "vue-router";
import  Home  from "./vue/home.vue";
import  Login  from "./pages/login.vue";
import  Register  from "./pages/register.vue";
import  Dashboard  from "./pages/dashboard.vue";
import store from './store/index.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta:{
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to,from) => {
    if(to.meta.requiresAuth && store.getters.getSanctumToken == 0){
        return {name: 'Login'}
    }
    if(!to.meta.requiresAuth && store.getters.getSanctumToken != 0){
        return {name: 'Dashboard'}
    }
})

export default router;