<template>
  <div id="app">
  <Loading v-show="loading"></Loading>
   <Header v-show="header"></Header>
  <router-view></router-view>
	<Footer v-show="footer"></Footer>
  </div>
</template>

<script>
import Header from './layouts/header.vue'
import Footer from './layouts/footer.vue'
import Loading from './components/loading/loading'
import Home from './pages/home'
import Detail from './pages/detail'
import { mapState } from 'vuex'
export default {
  name: 'app', 
  components: {
    Header,Footer,Loading,Home,Detail
  },
  watch:{
	  $route:{
		  handler (to) {
        let path = to.path
        if (/home|recom|user/.test(path)) {
          this.$store.commit('header', true)
          this.$store.commit('footer', true)
          this.$store.commit('back', false)
        }
        if (/detail|login|reg/.test(path)) {
          this.$store.commit('header', false)
          this.$store.commit('footer', false)
          this.$store.commit('back', true)
        }
        if (/user/.test(path)) {
          this.$store.commit('header', false)
          this.$store.commit('footer', true)
        }
      },
	  }
  },
  computed:{
    ...mapState(['header','footer','loading'])
  }
}
</script>

<style scoped>
html,body,ol,ul,li,h1,h2,h3,h4,h5,h6,p,th,td,dl,dt,form,fieldset,legend,input,textarea,select{
	margin:0;padding:0;
	}
body{
	font-family: '微软雅黑';
	}
	ul,ol,li{
	list-style:none;
	}
h1,h2,h3,h4,h5,h6{

	font-weight: normal;
	}
b,strong{
	font-weight: normal;
	}
i,em{
	font-style: normal;
	}
a,u,ins{
	text-decoration: none;
	}
img{
	border:0;
	display:block;
	}
input,fieldset{
	outline: none;
	border:0;
	}
.clear_fix:after{
	content:'.';
	clear:both;
	height:0;
	overflow:hidden;
	display:block;
	visibility: hidden;
	}
.clear_fix{
	zoom:1; /* 用来兼容IE6、7 的高度自适应的问题的； */
	}	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
