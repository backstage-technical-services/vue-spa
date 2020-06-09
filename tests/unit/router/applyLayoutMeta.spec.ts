import { Layout } from '@/layouts'
import { applyLayoutMeta } from '@/router/utils'

describe('a list of routes and a layout', () => {
  const layout = Layout.MAIN
  const routes = applyLayoutMeta(
    [
      { path: '/one' },
      { path: '/two' }
    ],
    layout
  )

  it('the layout meta should be applied to all routes', () => {
    routes.forEach(route => {
      expect(route.meta).toHaveProperty('layout', layout)
    })
  })
})
