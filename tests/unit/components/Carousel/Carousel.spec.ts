import Carousel from '@/components/Carousel/Carousel.vue'
import { mount } from '../../utils/vue'

describe('Carousel component', () => {
  it('renders all images', () => {
    const carousel = mount(Carousel, {
      propsData: {
        images: [
          { url: '#1', text: 'Caption #1' },
          { url: '#2' }
        ]
      }
    })

    expect(carousel.isVueInstance())
      .toBeTruthy()
    expect(carousel.findAll('img'))
      .toHaveLength(2)

    carousel.destroy()
  })

  it('renders with no images provided', () => {
    const carousel = mount(Carousel, {
      propsData: {
        images: []
      }
    })

    expect(carousel.isVueInstance())
      .toBeTruthy()
    expect(carousel.findAll('img'))
      .toHaveLength(0)

    carousel.destroy()
  })
})
