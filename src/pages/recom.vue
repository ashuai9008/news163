<template>
    <div class="home">
            <Cell :list='list.slice(0,10)'/>
    </div>
</template>
<script>
import Cell from '../components/cell/cell'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    data(){
        return {

        }
    },
    components:{
        Cell
    },
    mounted(){
        this.$store.dispatch('home/'+'home')
    },
    computed:{
        ...mapState('home',['list'])
    }
}
</script>
<style lang="">
    
</style>