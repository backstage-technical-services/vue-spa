import {
  createLocalVue as vueCreateLocalVue,
  mount as vueMount,
  shallowMount as vueShallowMount,
  ThisTypedMountOptions,
  VueClass
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Vuex, { StoreOptions } from 'vuex'
import Vue from 'vue'

export const createLocalVue = () => {
  const localInstance = vueCreateLocalVue()
  localInstance.use(VueRouter)
  localInstance.use(Vuex)
  localInstance.use(BootstrapVue)
  localInstance.component('font-awesome-icon', FontAwesomeIcon)

  return localInstance
}

const createMountOptions = <V extends Vue>(
  options?: ThisTypedMountOptions<V>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storeOptions?: StoreOptions<any>
): ThisTypedMountOptions<V> => {
  const localVue = createLocalVue()
  const store = storeOptions ? { store: new Vuex.Store(storeOptions) } : {}

  return {
    ...options,
    localVue,
    ...store
  }
}

export const mount = <V extends Vue>(
  component: VueClass<V>,
  options?: ThisTypedMountOptions<V>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storeOptions?: StoreOptions<any>
) => vueMount(component, createMountOptions(options, storeOptions))

export const shallowMount = <V extends Vue>(
  component: VueClass<V>,
  options?: ThisTypedMountOptions<V>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storeOptions?: StoreOptions<any>
) => vueShallowMount(component, createMountOptions(options, storeOptions))
