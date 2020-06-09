import { mount } from '../../../utils/vue'
import Copyright from '@/layouts/Main/Footer/Copyright.vue'

describe('the copyright footer section', () => {
  const footerSection = mount(Copyright)

  it('should render without crashing', () => {
    expect(footerSection.isVueInstance()).toBeTruthy()
  })

  it('should contain the date', () => {
    expect(footerSection.text()).toContain(new Date().getFullYear())
  })
})
