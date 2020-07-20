import axios from 'axios'
import keycloak, { MIN_TOKEN_VALIDITY } from '@/config/auth'

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:8000'

export const http = axios.create({
  baseURL: API_URL
})
http.interceptors.request.use(config => {
  if (!keycloak.authenticated) {
    return config
  }

  const { headers, ...otherConfig } = config

  return keycloak
    .updateToken(MIN_TOKEN_VALIDITY)
    .then(() => {
      headers.Authorization = `Bearer ${keycloak.token}`

      return Promise.resolve({ ...otherConfig, headers })
    })
    .catch(error => {
      console.error('Failed to update access token', error)

      keycloak.logout({
        redirectUri: window.location.origin
      })

      return config
    })
})

export default http
