<template>
  <div class="container mt-3">
        <h2>Dashboard: </h2>
        <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {PiniaStore} from '../store/PiniaStore.js';
export default {
    setup(){
        const router = useRouter();
        const store = useStore()
        const pinia_store = PiniaStore()
        function logout(){     
            // store.dispatch('removeSanctumToken')     // vuex  
            pinia_store.removeSanctumToken()     // pinia  
            router.push({name:'Home'})
        }
        return {logout}
    }
}
</script>

<style>

</style>