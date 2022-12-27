import { createWebHistory, createRouter } from "vue-router";
import  Home  from "./vue/home.vue";
import  Login  from "./pages/login.vue";
import  Register  from "./pages/register.vue";
import  Dashboard  from "./pages/dashboard.vue";
import  DynamicForm  from "./pages/dynamic_form.vue";
import store from './store/index.js'
import {PiniaStore} from './store/PiniaStore.js'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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
    },
    {
        path: '/dynamic_form',
        name: 'DynamicForm',
        component: DynamicForm,
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

    // Vuex

    // if(to.meta.requiresAuth && store.getters.getSanctumToken == 0){
    //     return {name: 'Login'}
    // }
    // if(!to.meta.requiresAuth && store.getters.getSanctumToken != 0){
    //     return {name: 'Dashboard'}
    // }


    // Pinia

    const pinia_store = PiniaStore()

    if(to.meta.requiresAuth && pinia_store.token == 0){
        return {name: 'Login'}
    }
    if(to.meta.requiresAuth == false && pinia_store.token != 0){
        return {name: 'Dashboard'}
    }
})

export default router;