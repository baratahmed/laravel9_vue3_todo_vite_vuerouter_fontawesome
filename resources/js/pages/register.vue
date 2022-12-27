<template>
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 mt-4">
          <h2>Register</h2>
          <div v-for="(error, index) in errors" :key="index">
              <div class="alert alert-danger" v-for="(err, ind) in error" :key="ind">{{ err }}</div>
          </div>
          <form @submit.prevent="register">
            <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="form.name" class="form-control" id="name">
              </div>
              <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" v-model="form.email" class="form-control" id="email">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="form.password" class="form-control" id="password">
              </div>
              <div class="form-group">
                  <label for="c_password">Confirm Password</label>
                  <input type="password" v-model="form.c_password" class="form-control" id="c_password">
              </div>
              <button type="submit" class="btn btn-success mt-2">Register</button>
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
            name: '',
            email: '',
            password: '',
            c_password: ''
        });
        let errors = ref([])
        const register = async() => {
          await axios.post('/api/register',form)
          .then(res => {
              if (res.data.success) {
                store.dispatch('setSanctumToken',res.data.data.token)
                router.push({name:'Dashboard'})
              }
          })
          .catch(err => {
              errors.value = err.response.data.message            
          });
        }

      return {form,register,errors}
    }
}
</script>

<style>

</style>