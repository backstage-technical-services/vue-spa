import Vue from 'vue'
import VueRouter from 'vue-router'
// Import routes
import rootRoutes from './root'
import adminRoutes from './admin'
import errorRoutes from './error'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    return {
      selector: to.hash || '',
      offset: to.hash ? undefined : savedPosition || { x: 0, y: 0 }
    }
  },
  routes: [
    ...rootRoutes,
    ...adminRoutes,
    ...errorRoutes
  ]
})
