import { mount } from '../../utils/vue'
import { Dashboard } from '@/views/Admin'

describe('the admin dashboard', () => {
  it('should render without crashing', () => {
    const view = mount(Dashboard)

    expect(view.isVueInstance())
      .toBeTruthy()

    expect(view.find('h1').text())
      .toBe('Dashboard')
  })
})
