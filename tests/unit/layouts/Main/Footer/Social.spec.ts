import { shallowMount } from '../../../utils/vue'
import Social from '@/layouts/Main/Footer/Social.vue'

describe('the social footer section', () => {
  const footerSection = shallowMount(Social)

  it('should render without crashing', () => {
    expect(footerSection.isVueInstance()).toBeTruthy()
  })

  it('should contain all the links', () => {
    expect(footerSection.findAll('a')).toHaveLength(3)
  })

  afterAll(() => {
    footerSection.destroy()
  })
})
