import Home from '@/views/Home'
import { shallowMount } from '../utils/vue'

describe('The home page', () => {
  it('renders without crashing', () => {
    const view = shallowMount(Home)

    expect(view.isVueInstance())
      .toBeTruthy()

    expect(view.find('.landing-page'))
      .toBeDefined()
  })
})



