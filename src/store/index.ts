import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'

// Stores
import auth from './auth'
import menu from './menu'

Vue.use(Vuex)

export interface ReadyProps {
  key: string;
  isReady: boolean;
}

export type ReadyState = {
  [key: string]: boolean;
}

export interface RootState {
  ready: ReadyState;
}

const initialAppState: RootState = {
  ready: {
    keycloak: false
  }
}

const getters: GetterTree<RootState, RootState> = {
  isReady: state => Object.values(state.ready)
    .reduce((prevValue, currentValue) => prevValue && currentValue)
}

const mutations: MutationTree<RootState> = {
  setReadiness: (state: RootState, { key, isReady }: ReadyProps): void => {
    state.ready[key] = isReady
  }
}

const actions: ActionTree<RootState, RootState> = {
  updateReadiness({ commit }, payload: ReadyProps) {
    commit('setReadiness', payload)
  }
}

export default new Vuex.Store({
  state: initialAppState,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    menu
  }
})
