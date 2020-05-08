import { shallowMount } from '@vue/test-utils'
import { ErrorLayout } from '@/layouts'
import vue from '../utils/vue'

describe('the error layout', () => {
  it('should render', () => {
    const wrapper = shallowMount(ErrorLayout, {
      localVue: vue()
    })

    expect(wrapper.isVueInstance())
      .toBeTruthy()
  })
})
