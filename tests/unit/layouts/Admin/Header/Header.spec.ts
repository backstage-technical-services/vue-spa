import { shallowMount } from '../../../utils/vue'
import Header from '@/layouts/Admin/Header'

describe('the admin header component', () => {
  const header = shallowMount(Header)

  it('should render without crashing', () => {
    expect(header.isVueInstance()).toBeTruthy()
  })
})
