import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js'
import store from '@/store'

const isDevelopment = process.env.NODE_ENV === 'development'

const config: KeycloakConfig = {
  url: process.env.VUE_APP_KEYCLOAK_URL as string,
  realm: process.env.VUE_APP_KEYCLOAK_REALM as string,
  clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID as string
}

const initConfig: KeycloakInitOptions = {
  adapter: 'default',
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  enableLogging: isDevelopment
}

const keycloak = Keycloak(config)

keycloak.onAuthLogout = () => {
  store.dispatch('auth/logout')
}
keycloak.onAuthRefreshError = () => {
  console.error('An error occurred when refreshing the token')
  keycloak.logout({
    redirectUri: window.location.origin
  })
}

export default keycloak
export { initConfig }
export const loginRedirectUri = window.location.href
export const MIN_TOKEN_VALIDITY: number = process.env.VUE_APP_MIN_TOKEN_VALIDITY || 1
