import { shallowMount } from '@vue/test-utils'
import { AdminLayout } from '@/layouts'
import vue from '../utils/vue'

describe('the admin layout', () => {
  it('should render', () => {
    const wrapper = shallowMount(AdminLayout, {
      localVue: vue()
    })

    expect(wrapper.isVueInstance())
      .toBeTruthy()
  })
})
