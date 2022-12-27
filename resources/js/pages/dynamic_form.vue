<template>
  <div class="container mt-4">
    <div class="card">
        <div class="card-body">
            <div v-for="(item,index) in form" :key="item">
                <h1>Item {{index + 1}}</h1>
                <div class="row">
                    <div class="col-sm-5">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="item.name">
                    </div>
                    <div class="col-sm-5">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="item.price">
                    </div>
                    <div class="col-sm-2 pt-4">
                        <button type="button" class="btn btn-success btn-sm mr-2" @click="addItem">+</button>
                        <button type="button" class="btn btn-danger btn-sm" @click="removeItem(index)">-</button>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-success mt-3" @click="saveItem">Save</button>  
        </div>  
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup(){
        const form = reactive([
            {
                name: '',
                price:0
            }
        ])

        const addItem = () => {
            form.push({name: '',price:0})
        }

        const removeItem = (index) => {
            if(form.length > 1){
                form.splice(index,1)
            }
        }
        
        const saveItem = () => {
            axios.post('api/item/store',form)
            .then(res => {

            })
            .catch(err => {

            })
        }

        return {form,addItem,removeItem,saveItem}
    }
}
</script>

<style>

</style>