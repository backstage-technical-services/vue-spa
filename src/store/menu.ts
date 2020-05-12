import { AdminMenu, MainMenu } from '@/types/menu'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '@/store/index'
import menu from '@/data/menu'
import adminMenu from '@/data/admin-menu'

export interface State {
  primaryMenu?: MainMenu;
  adminMenu?: AdminMenu | null;
}

const initialState: State = {
  primaryMenu: undefined,
  adminMenu: undefined
}

const getters: GetterTree<State, RootState> = {
  getPrimary: state => state.primaryMenu,
  getAdmin: state => state.adminMenu
}

const mutations: MutationTree<State> = {
  setPrimary: (state: State, menu: MainMenu): void => {
    state.primaryMenu = menu
  },
  setAdmin: (state: State, menu?: AdminMenu): void => {
    state.adminMenu = menu || null
  }
}

const actions: ActionTree<State, RootState> = {
  refreshPrimaryMenu({ commit }) {
    console.warn('Fetching menu from the API has not yet been implemented')
    commit('setPrimary', menu)
  },
  refreshAdminMenu({ commit }) {
    console.warn('Fetching menu from the API has not yet been implemented')
    commit('setAdmin', adminMenu)
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
