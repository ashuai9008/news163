<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.imgsrc" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  data() {
    return {
      images: []
    }
  },
  props:{
    list:{
      type:Array
    }
  }

}
</script>
<style>
    img{
        width: 100%;
    }
</style>