import { RouteConfig } from 'vue-router'
import { Layout } from '@/layouts'
import { applyLayoutMeta } from './utils'

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/faq',
    component: () => import('@/views/FAQ')
  }
]

export default applyLayoutMeta(routes, Layout.MAIN)
