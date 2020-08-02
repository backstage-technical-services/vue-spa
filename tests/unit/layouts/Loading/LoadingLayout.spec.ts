import { mount } from '../../utils/vue'
import { LoadingLayout } from '@/layouts'

describe('the loading layout', () => {
  const layout = mount(LoadingLayout)

  it('should render without crashing', () => {
    expect(layout.isVueInstance()).toBeTruthy()
  })

  it('should show the spinner', () => {
    expect(layout.find('.fa-spinner-third').exists()).toBe(true)
  })
})
