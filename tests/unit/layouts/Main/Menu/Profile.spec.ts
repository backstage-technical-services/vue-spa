import { mount, shallowMount } from '../../../utils/vue'
import Profile from '@/layouts/Main/Menu/Profile'
import keycloak, { initConfig } from '@/config/auth'

keycloak.init(initConfig)

describe('the menu profile component when not authed', () => {
  const getters = {
    'auth/isAuthenticated': jest.fn(() => false)
  }
  const profile = mount(Profile, undefined, { getters })

  it('should render without crashing', () => {
    expect(profile.isVueInstance()).toBeTruthy()
  })

  it('should show the login link', () => {
    expect(profile.find('a.navbar-profile-link-wrapper').exists()).toBe(true)
    expect(profile.find('a.navbar-profile-link-wrapper').attributes()).toHaveProperty('href')
  })

  afterAll(() => {
    profile.destroy()
  })
})

describe('the menu profile component when authed', () => {
  const getters = {
    'auth/isAuthenticated': jest.fn(() => true)
  }
  const profile = mount(Profile, undefined, { getters })

  it('should render without crashing', () => {
    expect(profile.isVueInstance()).toBeTruthy()
  })

  it('should show the profile menu', () => {
    expect(profile.find('.dropdown.navbar-profile-link-wrapper').exists()).toBe(true)
  })

  it('should show the logout button', () => {
    expect(profile.find('li > button').exists()).toBe(true)
    expect(profile.find('li > button').text()).toBe('Logout')
  })

  afterAll(() => {
    profile.destroy()
  })
})
