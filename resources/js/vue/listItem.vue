<template>
  <div class="item">
      <input
        type="checkbox"
        @change="updateCheck()"
        v-model="item.completed"
        :checked="item.completed_at==null ? false:true"
       />
       <span :class="[item.completed ? 'completed':'' , 'itemText']">{{ item.name }}</span>
       <button @click="removeItem()" class="trashcan"><font-awesome-icon icon="trash"/></button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:["item"],
  methods:{
    updateCheck(){
      // console.log('EEEEEEEEEEEE')
      // console.log(this.item)
      axios.put('api/item/'+this.item.id,{item: this.item})
      .then(res => {
          if(res.status == 200){
              this.$emit('itemChanged')
          }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    removeItem(){
      axios.delete('api/item/'+this.item.id)
      .then(res => {
          if(res.status == 200){
              this.$emit('itemChanged')
          }
      })
      .catch(err=>{
        console.log(err)
      })
    },
  }
}
</script>

<style scoped>
.completed{
  text-decoration: line-through;
  color: #999999;
}
.itemText{
  width: 100%;
  margin-left: 20px;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
}
.trashcan{
  background: #e6e6e6;
  color: red;
  border: none;
  outline: none;
}

</style>