import Vue from 'vue'
import titleMixin from '@/mixins/titleMixin'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/bootstrap'
import './config/fontawesome'

// Vue.config.productionTip = false;

Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
