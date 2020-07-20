import axios from "axios";
const state={
    list:[],
};
const actions={
    home:({conmit,state},payload)=>{
        axios({
            url:'/T1348647853363/0-140.html',
            method:'get',
        }).then((res)=>{
            commit("recom",res.data["T1348647853363"])
        })
    }
};
const mutations={
    home:(state,payload)=>{
        state.list=playload
    }
}
const getters={};
export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
};