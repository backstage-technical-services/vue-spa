import { mount } from '../../../utils/vue'
import Profile from '@/layouts/Main/Menu/Profile.vue'

describe('the menu profile component', () => {
  const profile = mount(Profile)

  it('should render without crashing', () => {
    expect(profile.isVueInstance()).toBeTruthy()
  })
})
