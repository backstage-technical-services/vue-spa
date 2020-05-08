import Vue from 'vue'
import Vuex from 'vuex'
// Import stores
import auth from './auth'
import menu from './menu'

Vue.use(Vuex)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export default new Vuex.Store({
  modules: {
    auth,
    menu
  }
})
