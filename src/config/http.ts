import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export const http = axios.create({
  baseURL: API_URL
})
http.interceptors.request.use(config => {
  // TODO once keycloak is implemented

  return config
})

export const authHttp = axios.create({
  baseURL: API_URL
})

export default http
