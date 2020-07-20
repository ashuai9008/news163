<template>
   <div class="detail">
    <van-row type="flex" justify="center" class="title">
        <van-col span="24">{{this.$route.query.item.title}}</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="author">
        <van-col span="24">{{this.$route.query.item.mtime}}</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="content">
        <van-col span="24">{{this.$route.query.item.digest}}</van-col>
    </van-row>
   </div>
</template>
<script>
import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
export default {
    
}
</script>
<style>
.detail{
    background-color:#cccccc;
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
    font-size: 0.3rem;
    
}
.detail .title{
    height: 1rem;
    width: 100%;
}   
.detail .author{
    /* background: cornflowerblue; */
    height: 1rem;
    width: 100%;
}

</style>