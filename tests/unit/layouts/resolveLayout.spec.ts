import { AdminLayout, ErrorLayout, Layout, MainLayout, resolveLayout } from '@/layouts'

describe('Resolving the layout', () => {
  it('passing ADMIN should return the correct component', () => {
    const layout = resolveLayout(Layout.ADMIN)

    expect(layout)
      .toBe(AdminLayout)
  })

  it('passing ERROR should return the correct component', () => {
    const layout = resolveLayout(Layout.ERROR)

    expect(layout)
      .toBe(ErrorLayout)
  })

  it('passing MAIN should return the correct component', () => {
    const layout = resolveLayout(Layout.MAIN)

    expect(layout)
      .toBe(MainLayout)
  })

  it('passing no layout should return the MAIN component', () => {
    const layout = resolveLayout()

    expect(layout)
      .toBe(MainLayout)
  })
})
