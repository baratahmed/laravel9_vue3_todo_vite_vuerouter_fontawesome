import {defineStore} from 'pinia'

export const PiniaStore = defineStore({
    id: 'UserStoreId',
    state: () => ({
        token: localStorage.getItem('sanctum_token') || 0
    }),
    getters:{
        // getSanctumToken: function(){
        //     return this.token
        // }

        // or
        
        getSanctumToken: state => state.token
        
    },
    actions:{
        setSanctumToken: function(token){
            this.token = token
            localStorage.setItem('sanctum_token',token)
        },
        removeSanctumToken: function(){
            this.token = 0
            localStorage.removeItem('sanctum_token')
        }
    }
});