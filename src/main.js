import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/js/font.js'
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from './plugins/axios'

Vue.use(Vant);
import router from './plugins/router.js'
import store from './plugins/vuex'

let vm=new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')

export default vm;