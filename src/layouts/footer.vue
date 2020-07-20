<template>
<van-tabbar class="footer" v-model="active">
  <van-tabbar-item icon="home-o"><router-link to="/home" tag="li" active-class="home-active" class="home"><a href="javascript:;">{{title.home}}</a></router-link></van-tabbar-item>
  <van-tabbar-item icon="search"><router-link to="/recom" tag="li" active-class="write-active" class="recom"><a href="javascript:;">{{title.recom}}</a></router-link></van-tabbar-item>
  <van-tabbar-item icon="friends-o"><router-link to="/user" tag="li" active-class="my-active" class="user"><a href="javascript:;">{{title.user}}</a></router-link></van-tabbar-item>

</van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
  export default {
    props:{},
    data(){
      return {
      active:0,
			title:{home: '首页',recom: '推荐',user:'我的' },
      }
    },
    components:{},
    mounted(){
		
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
.footer{width:100%;height:1rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  /* .foot-btn{width:100%;height:1rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:4.08rem; margin:0 auto;position: relative;}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;color: #FF3344;}
  .foot-btn ul .home{width:0.5rem;height:0.5rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%;position: absolute; top:0.3rem;left: 0.1rem;}
  .foot-btn ul .recom{width:0.5rem;height:0.5rem; background:url(../assets/img/recom.png) no-repeat 0 0; background-size:100%;position: absolute; top:0.3rem;left: 1.8rem;}
  .foot-btn ul .my{width:0.5rem;height:0.5rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%;position: absolute; top:0.3rem;right: 0.1rem;}
   */
  /* .foot-btn ul .home-active{width:0.44rem;height:0.59rem; background:url(../assets/img/home-active.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;} */
  /* .foot-btn ul .write-active{width:0.82rem;height:0.81rem; background:url(../assets/img/write-active.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;} */
  /* .foot-btn ul .my-active{width:0.39rem;height:0.63rem; background:url(../assets/img/my-active.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;} */
  
</style>
