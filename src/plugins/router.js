import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../pages/home.vue";
import Recom from '../pages/recom.vue'
import detail from "../pages/detail.vue";
import login from "../pages/login.vue";
import reg from "../pages/reg.vue";
import User from '../pages/user.vue'
let routes=[
    {path:'/home',component:Home},
    {path:'/recom',component:Recom},
    {path:'/user',component:User},
    {path:'/detail',component:detail,name:'detail'},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect:'/home'},

]
export default new Router({
    routes,
    mode:'history'
})