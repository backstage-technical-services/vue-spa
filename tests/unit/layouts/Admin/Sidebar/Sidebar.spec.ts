import { shallowMount } from '../../../utils/vue'
import Sidebar from '@/layouts/Admin/Sidebar'

describe('the admin sidebar component', () => {
  const actions = {
    'menu/refreshAdminMenu': jest.fn()
  }
  const menu = shallowMount(Sidebar, undefined, { actions })

  it('should render without crashing', () => {
    expect(menu.isVueInstance()).toBeTruthy()
  })

  it('the action should have been called', () => {
    expect(actions['menu/refreshAdminMenu']).toHaveBeenCalled()
  })
})
