import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'
import state from '../store/state'

import home  from '../store/module/home'
import recom from '../store/module/recom'
// import  from ''
// import  from ''
// import  from ''
const store = new Vuex.Store({
    // ...
    actions,mutations,getters,state,modules:{home,recom}
}) 


export default store