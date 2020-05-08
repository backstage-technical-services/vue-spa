import {
  createLocalVue,
  mount as vueMount,
  shallowMount as vueShallowMount,
  ThisTypedMountOptions,
  VueClass
} from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vue from 'vue'

export const localVue = () => {
  const localInstance = createLocalVue()
  localInstance.use(VueRouter)
  localInstance.use(Vuex)
  localInstance.use(BootstrapVue)
  localInstance.component('font-awesome-icon', FontAwesomeIcon)

  return localInstance
}

export function mount<V extends Vue>(component: VueClass<V>, options?: ThisTypedMountOptions<V>) {
  return vueMount(component, {
    ...options,
    localVue: localVue()
  })
}

export function shallowMount<V extends Vue>(component: VueClass<V>, options?: ThisTypedMountOptions<V>) {
  return vueShallowMount(component, {
    ...options,
    localVue: localVue()
  })
}
