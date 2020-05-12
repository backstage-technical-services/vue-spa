import { mount } from '../../../utils/vue'
import About from '@/layouts/Main/Footer/About.vue'

describe('the about footer section', () => {
  const footerSection = mount(About)

  it('should render', () => {
    expect(footerSection.isVueInstance()).toBeTruthy()
  })

  it('should contain the email link', () => {
    const emailElement = footerSection.find('[data-qa-id=contact-email')
    expect(emailElement).toBeTruthy()
    expect(emailElement.text()).toBe('info@bts-crew.com')
    expect(emailElement.attributes('href')).toBe('mailto:info@bts-crew.com')
  })
})
