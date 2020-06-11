import Error from '@/views/Error'
import { shallowMount } from '../utils/vue'

describe('The error page', () => {
  it('renders without crashing', () => {
    const view = shallowMount(Error, {
      propsData: {
        code: 422,
        details: 'The error message'
      }
    })

    expect(view.isVueInstance())
      .toBeTruthy()

    expect(view.find('.error-code').text())
      .toBe('422')

    expect(view.find('.error-content--details').text())
      .toBe('The error message')

    view.destroy()
  })
})
