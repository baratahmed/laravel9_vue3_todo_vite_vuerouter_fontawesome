<template>
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 mt-4">
          <h1>Login</h1>
          <p class="alert alert-danger" v-if="error">{{ error }}</p>
          <form @submit.prevent="login">
              <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" v-model="form.email" class="form-control" id="email">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="form.password" class="form-control" id="password">
              </div>
              <button type="submit" class="btn btn-primary mt-2">Login</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import {reactive,ref}  from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
      setup(){
        const router = useRouter()
        const store = useStore()
        let form = reactive({
            email: '',
            password: ''
        });
        let error = ref('')
        const login = async() => {
          await axios.post('/api/login',form)
          .then(res => {
              if (res.data.success) {
                store.dispatch('setSanctumToken',res.data.data.token)
                router.push({name:'Dashboard'})
              } 
          })
          .catch(err => {
              error.value = err.response.data.message
          });
        }

      return {form,login,error}
    }
}
</script>

<style>

</style>