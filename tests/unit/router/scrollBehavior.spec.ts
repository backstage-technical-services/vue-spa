import { scrollBehavior } from '@/router'

const route = (hash = '') => {
  return {
    path: '/',
    fullPath: '/',
    hash: hash,
    query: {},
    params: {},
    matched: []
  }
}
const savedPosition = {
  x: 100,
  y: 200
}

describe('determining the scroll behaviour', () => {
  it('when the new URL has a has that should be returned', () => {
    expect(scrollBehavior(route('hash'), route())).toHaveProperty('selector', 'hash')
  })

  it('when the router has a saved position that should be returned', () => {
    expect(scrollBehavior(route(), route(), savedPosition)).toBe(savedPosition)
  })

  it('the default should be 0,0', () => {
    expect(scrollBehavior(route(), route())).toStrictEqual({ x: 0, y: 0 })
  })
})
