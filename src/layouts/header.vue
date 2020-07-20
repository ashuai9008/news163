<template>
    <van-row type="flex" justify="center" class="nav">
      <router-link to="/index" active-class="active"><van-col span="3"><a hr0ef="javascript:;" ><van-icon name="replay" /></a></van-col></router-link>
      <router-link to="/search" active-class="active"><a href="javascript:;" ><van-search id='search' background="#ff3344" placeholder="请输入搜索关键词" /></a></router-link>
      <router-link to="/msg" active-class="active"><van-col span="1"><a href="javascript:;" ><van-icon name="chat-o" /></a></van-col></router-link>
    </van-row>  
</template>

<script>
import Vue from 'vue';
import { Col, Row,Icon,Search } from 'vant';

Vue.use(Search);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
  export default {
    props:{},
    data(){
      return {
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>
	
<style scoped>
.nav{width:100%; height: 1rem; position:fixed; top:0;left:0; z-index:2; background:#ff3344;font-size: 0.4rem;}
.nav a{height:1rem; line-height:1rem; color:#fff;}
  /* .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#ff3344;}
  .nav ul{width:4.38rem;height:0.8rem; margin:0 auto;}
  .nav ul li a{float: left;width:1.46rem;height:0.8rem; line-height:0.8rem; text-align:center; color:#fff;}
  .nav ul #left{position:absolute;left: 0;bottom: 0;font-size: 0.3rem;}
  .nav ul #right{position:absolute;right: 0;bottom: 0;font-size: 0.3rem;}
  .nav ul #main{position: absolute; left: 50%; top: 50%;transform: translate(-50%, -50%);font-size: 0.5rem;} */
</style>
