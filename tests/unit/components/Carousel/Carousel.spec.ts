import { createLocalVue, mount } from '@vue/test-utils'
import Carousel from '@/components/Carousel/Carousel.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Carousel component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(Carousel, {
      localVue,
      propsData: {
        images: [
          { url: '#1', text: 'Caption #1' },
          { url: '#2' }
        ]
      }
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
