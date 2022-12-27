<template>
  <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <router-link class="navbar-brand ml-2" to="/">Home</router-link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="text-white" :to="{name:'Login'}">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/register">Register</router-link>
            </li>   
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/dashboard">Dashboard</router-link>
            </li>           
          </ul>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
import Home from './vue/home.vue'
export default {
  components:{
    Home
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>