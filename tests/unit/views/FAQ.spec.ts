import FAQ from '@/views/FAQ'
import { mount } from '../utils/vue'

describe('the FAQ page', () => {
  it('renders without crashing', () => {
    const view = mount(FAQ)

    expect(view.isVueInstance())
      .toBeTruthy()

    expect(view.find('h1').text())
      .toBe('Frequently Asked Questions')

    expect(view.findAll('h3'))
      .toHaveLength(6)
  })
})
