import { accessToken, refreshToken } from '@/data/auth'
import moment from 'moment'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '@/store/index'

export interface State {
  accessToken: string | null;
  refreshToken: string | null;
}

export const decodeToken = (token: string) => {
  const [header, body, signature] = token.split('.')

  return {
    header: JSON.parse(atob(header)),
    body: JSON.parse(atob(body)),
    signature: signature
  }
}

export const isValidToken = (token: string) => {
  try {
    const decodedToken = decodeToken(token)
    const tokenExpiry = decodedToken.body.exp || 0

    return moment.utc().isSameOrBefore(moment.unix(tokenExpiry))
  } catch (e) {
    console.error('Could not decode JWT: ', e)
    return false
  }
}

const initialState: State = {
  accessToken: null,
  refreshToken: null
}

const getters: GetterTree<State, RootState> = {
  isLoggedIn: state => state.accessToken !== null,
  accessToken: state => state.accessToken,
  refreshToken: state => state.refreshToken
}

const mutations: MutationTree<State> = {
  saveAuth: (state, { accessToken, refreshToken }) => {
    state.accessToken = accessToken
    state.refreshToken = refreshToken
  },
  clearAuth: state => {
    state.accessToken = null
    state.refreshToken = null
  }
}

const actions: ActionTree<State, RootState> = {
  login({ commit }, { username, password }) {
    console.warn('Proper authentication isn\'t yet implemented.')

    commit('saveAuth', {
      accessToken,
      refreshToken
    })
  },
  logout({ commit }) {
    commit('clearAuth')
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
