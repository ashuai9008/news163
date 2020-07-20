<template>
    <div class="home">
        <Banner :list='list.slice(0,5)'/>
        <Cell :list='list.slice(0,30)'/>
    </div>
</template>
<script>
import Banner from '../components/banner/banner'
import Cell from '../components/cell/cell'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            // data:[]
        }
    },
    components:{
        Banner,Cell
    },
     mounted(){
    this.$store.dispatch('home/'+'home')

     },

     computed:{
         ...mapState('home',['list'])
     }
    
}
</script>
<style>
    
</style>