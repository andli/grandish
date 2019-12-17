import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import { router } from './router'
import store from './store'
import App from './App.vue'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/app.scss';

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
