import { ErrorLayout } from '@/layouts'
import { shallowMount } from '../../utils/vue'

describe('the error layout', () => {
  it('should render', () => {
    const layout = shallowMount(ErrorLayout)

    expect(layout.isVueInstance())
      .toBeTruthy()
  })
})
