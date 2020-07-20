<template>
    <div class="login">
        <van-field v-model="text" label="账号" placeholder="请输入账号"/>
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
        <button v-on:click="login" value="登录">登录</button>
    </div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';

Vue.use(Field);
export default {
    data() {
    return {
      text: '',
      password: '',
    };
  },
}
</script>
<style spoced>
    
</style>