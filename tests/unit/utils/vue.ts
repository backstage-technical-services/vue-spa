import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const vue = () => {
  const localInstance = createLocalVue()
  localInstance.use(BootstrapVue)
  localInstance.component('font-awesome-icon', FontAwesomeIcon)

  return localInstance
}

export default vue
