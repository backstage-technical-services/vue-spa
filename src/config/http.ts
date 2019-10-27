import axios from 'axios'
import store from '@/store'
import { isValidToken } from '@/store/auth'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export const http = axios.create({
  baseURL: API_URL
})
http.interceptors.request.use(config => {
  const accessToken = store.getters['auth/accessToken']

  if (!isValidToken(accessToken)) {
    console.warn('Token has expired but refreshing is not yet implemented.')
  }

  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

export const authHttp = axios.create({
  baseURL: API_URL
})

export default http
