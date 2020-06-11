import { AdminLayout } from '@/layouts'
import { shallowMount } from '../../utils/vue'

describe('the admin layout', () => {
  it('should render', () => {
    const layout = shallowMount(AdminLayout)

    expect(layout.isVueInstance())
      .toBeTruthy()

    layout.destroy()
  })
})
