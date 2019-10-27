import { Layout } from '@/layouts'
import { RouteConfig } from 'vue-router'
import { applyLayoutMeta } from './utils'

const routes: RouteConfig[] = [
  {
    path: '/admin*',
    component: () => import('@/views/Admin/Dashboard.vue')
  }
]

export default applyLayoutMeta(routes, Layout.ADMIN)
