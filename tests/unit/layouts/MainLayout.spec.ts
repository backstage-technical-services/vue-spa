import { shallowMount } from '@vue/test-utils'
import { MainLayout } from '@/layouts'
import vue from '../utils/vue'

describe('the main layout', () => {
  it('should render', () => {
    const wrapper = shallowMount(MainLayout, {
      localVue: vue()
    })

    expect(wrapper.isVueInstance())
      .toBeTruthy()
  })
})
