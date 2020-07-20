import { shallowMount } from '../../../utils/vue'
import Profile from '@/layouts/Main/Menu/Profile'

describe('the menu profile component', () => {
  const profile = shallowMount(Profile)

  it('should render without crashing', () => {
    expect(profile.isVueInstance()).toBeTruthy()
  })

  afterAll(() => {
    profile.destroy()
  })
})
