<template>
  <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <!-- <router-link class="navbar-brand ml-2" to="/">Home | {{ $store.state.token }}</router-link> -->
          <router-link class="navbar-brand ml-2" to="/" >Home</router-link>

          <!-- Vuex -->
          <!-- <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="text-white" :to="{name:'Login'}" v-if="$store.getters.getSanctumToken == 0">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/register" v-if="$store.getters.getSanctumToken == 0">Register</router-link>
            </li>   
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/dashboard" v-if="$store.getters.getSanctumToken != 0">Dashboard</router-link>
            </li>   
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/dynamic_form">Dynamic Form</router-link>
            </li>          
          </ul> -->


          <!-- Pinia -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="text-white" :to="{name:'Login'}" v-if="token == 0">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/register" v-if="token == 0">Register</router-link>
            </li>   
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/dashboard" v-if="token != 0">Dashboard</router-link>
            </li>   
            <li class="nav-item">
              <router-link class="text-white ml-2" to="/dynamic_form" v-if="token != 0">Dynamic Form</router-link>
            </li>          
          </ul>          
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
import {PiniaStore} from './store/PiniaStore.js';
import {mapState} from 'pinia'
export default {
  computed:{
    ...mapState(PiniaStore,['token'])
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>