<template>
    <div class="reg">
        <van-field v-model="text" label="账号" placeholder="请设置账号"/>
        <van-field v-model="password" type="password" label="密码" placeholder="请设置密码" />
    </div>
</template>
<script>
import Vue from 'vue';
import { Field } from 'vant';

Vue.use(Field);
export default {
    
}
</script>
<style spoced>
    
</style>