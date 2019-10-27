import { RouteConfig } from 'vue-router'
import { Layout } from '@/layouts'
import { applyLayoutMeta } from './utils'

const routes: RouteConfig[] = [
  // 404
  {
    path: '*',
    component: () => import('@/views/Error/Error.vue'),
    props: {
      code: 404,
      details: 'We couldn\'t find what you were looking for'
    }
  }
]

export default applyLayoutMeta(routes, Layout.ERROR)
