import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
import 'lib-flexible'
import * as API from '@/api'
import store from './vuex/store'
import './validate'

Vue.config.productionTip = false
Vue.prototype.$API = API

Vue.component(Button.name, Button) 

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
