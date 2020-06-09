import { RouteConfig } from 'vue-router'
import { Layout } from '@/layouts'

export const applyLayoutMeta = (routes: RouteConfig[], layout: Layout): RouteConfig[] => {
  routes.forEach(route => {
    route.meta = {
      ...route.meta,
      layout: layout
    }
  })

  return routes
}
