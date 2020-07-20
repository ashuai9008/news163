<template>
    <div class="cell">
        <ul>
            <router-link v-for="(item,index) in list" :key="index" :to="{name:'detail',query:{item}}">
                <van-row>
                    <van-col span="18"><span><a href="">{{item.title}}</a></span></van-col>
                    <van-col span="6"><img :src="item.imgsrc" /></van-col>
                </van-row>
            </router-link>
        </ul>
    </div>
</template>
<script>
import $ from "jquery"
import axios from 'axios'

import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
export default {
    name:'cell',
    data(){
        return {
            data:[]
        }
    },
    props:{
        list:{
            type:Array
        }
    }
    // mounted(){
    //    axios({
    //        url:'/T1348647853363/0-140.html',
    //        method:'get',
    //    }).then(
    //        res=>{
    //            this.data=res.data['T1348647853363']
    //            console.log(this.data)
    //        }
    //    )
    // }
    
}

</script>
<style>
    .cell ul li{

        background-color: #cccccc;
        font-size: 0.5rem;
        font-family: '宋体';
    }
    .cell ul span{
        display: block;
        height: 0.9rem;
    }
    .cell ul span a{
        color: #333333;
    }
</style>