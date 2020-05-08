import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const vue = () => {
  const localInstance = createLocalVue()
  localInstance.use(VueRouter)
  localInstance.use(Vuex)
  localInstance.use(BootstrapVue)
  localInstance.component('font-awesome-icon', FontAwesomeIcon)

  return localInstance
}

export default vue
