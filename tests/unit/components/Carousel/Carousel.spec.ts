import { mount } from '@vue/test-utils'
import Carousel from '@/components/Carousel/Carousel.vue'
import vue from '../../utils/vue'
import { CarouselProps } from '@/components/Carousel/types'

const createCarousel = (images: CarouselProps['images']) => {
  return mount(Carousel, {
    localVue: vue(),
    propsData: {
      images
    }
  })
}

describe('Carousel component', () => {
  it('renders all images', () => {
    const carousel = createCarousel([
      { url: '#1', text: 'Caption #1' },
      { url: '#2' }
    ])

    expect(carousel.isVueInstance())
      .toBeTruthy()
    expect(carousel.findAll('img'))
      .toHaveLength(2)
  })

  it('renders with no images provided', () => {
    const carousel = createCarousel([])

    expect(carousel.isVueInstance())
      .toBeTruthy()
    expect(carousel.findAll('img'))
      .toHaveLength(0)
  })
})
