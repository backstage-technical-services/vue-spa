import { MainLayout } from '@/layouts'
import { shallowMount } from '../../utils/vue'

describe('the main layout', () => {
  it('should render', () => {
    const layout = shallowMount(MainLayout)

    expect(layout.isVueInstance())
      .toBeTruthy()

    layout.destroy()
  })
})
