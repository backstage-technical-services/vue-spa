import { KeycloakProfile } from 'keycloak-js'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '@/store/index'
import keycloak from '@/config/auth'

export interface State {
  authenticated: boolean;
  profile?: KeycloakProfile;
}

const initialState: State = {
  authenticated: keycloak?.authenticated || false
}

const getters: GetterTree<State, RootState> = {
  isAuthenticated: state => state.authenticated,
  getProfile: state => state.profile
}

const mutations: MutationTree<State> = {
  setAuthenticated: (state: State, isAuthenticated: boolean): void => {
    state.authenticated = isAuthenticated
  },
  setProfile: (state: State, profile: KeycloakProfile): void => {
    state.profile = profile
  }
}

const actions: ActionTree<State, RootState> = {
  setProfile({ commit }, profile: KeycloakProfile) {
    commit('setProfile', profile)
  },
  login({ commit }) {
    commit('setAuthenticated', true)
  },
  logout({ commit }) {
    commit('setAuthenticated', false)
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
