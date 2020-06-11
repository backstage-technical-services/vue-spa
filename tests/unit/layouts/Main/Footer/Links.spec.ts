import { shallowMount } from '../../../utils/vue'
import Links from '@/layouts/Main/Footer/Links.vue'

describe('the links footer section', () => {
  const footerSection = shallowMount(Links)

  it('should render without crashing', () => {
    expect(footerSection.isVueInstance()).toBeTruthy()
  })

  it('should contain all the links', () => {
    expect(footerSection.findAll('li')).toHaveLength(5)
  })

  afterAll(() => {
    footerSection.destroy()
  })
})
