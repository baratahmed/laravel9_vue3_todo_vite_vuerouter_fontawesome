import {createStore} from 'vuex'

const store = createStore({
    state:{
        // Define Variables
        token: localStorage.getItem('sanctum_token') || 0
    },
    mutations:{
        // Update variable value
        UPDATE_SANCTUM_TOKEN(state, payload){
            state.token = payload
        }
    },
    actions:{
        // Action to be performed
        setSanctumToken(context, payload){
            localStorage.setItem('sanctum_token',payload)
            context.commit('UPDATE_SANCTUM_TOKEN',payload)
        },
        removeSanctumToken(context){
            localStorage.removeItem('sanctum_token')
            context.commit('UPDATE_SANCTUM_TOKEN',0)
        }
    },
    getters:{  
        // get state variable value
        getSanctumToken: function(state){
            return state.token
        }
    }
})

export default store