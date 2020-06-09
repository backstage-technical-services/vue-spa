import { shallowMount } from '../../../utils/vue'
import Menu from '@/layouts/Main/Menu'

describe('the menu component', () => {
  const actions = {
    'menu/refreshPrimaryMenu': jest.fn()
  }
  const menu = shallowMount(Menu, undefined, { actions })

  it('should render without crashing', () => {
    expect(menu.isVueInstance()).toBeTruthy()
  })

  it('the action should have been called', () => {
    expect(actions['menu/refreshPrimaryMenu']).toHaveBeenCalled()
  })
})
