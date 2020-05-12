import Vue from 'vue'
import VueRouter from 'vue-router'
// Import routes
import rootRoutes from './root'
import adminRoutes from './admin'
import errorRoutes from './error'
import { Position, Route } from 'vue-router/types/router'

Vue.use(VueRouter)

export const scrollBehavior = (
  to: Route,
  from: Route,
  savedPosition: Position | void
) => {
  if (to.hash) {
    return { selector: to.hash }
  }

  return savedPosition || { x: 0, y: 0 }
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    ...rootRoutes,
    ...adminRoutes,
    ...errorRoutes
  ]
})
