import { mount } from '../../../utils/vue'
import MenuItem from '@/layouts/Main/Menu/MenuItem.vue'

describe('a menu item with no ID or text', () => {
  const menuItem = mount(MenuItem, {
    propsData: {
      isLast: false
    }
  })

  it('should render without crashing', () => {
    expect(menuItem.isVueInstance()).toBeTruthy()
  })

  it('should render a divider', () => {
    expect(menuItem.find('.dropdown-divider')).toBeTruthy()
  })

  afterAll(() => {
    menuItem.destroy()
  })
})

describe('a menu item with no link or children', () => {
  const menuItem = mount(MenuItem, {
    propsData: {
      text: 'Text',
      isLast: false
    }
  })

  it('should render without crashing', () => {
    expect(menuItem.isVueInstance()).toBeTruthy()
  })

  it('should render a nav item', () => {
    expect(menuItem.find('li.nav-item')).toBeTruthy()
    expect(menuItem.find('a.nav-link').text()).toBe('Text')
  })

  it('the nav item should have an empty fragment', () => {
    expect(menuItem.find('a.nav-link').attributes('href')).toBe('#')
  })

  afterAll(() => {
    menuItem.destroy()
  })
})

describe('a menu item with no children and a link', () => {
  const menuItem = mount(MenuItem, {
    propsData: {
      text: 'Text',
      link: 'http://link',
      isLast: false
    }
  })

  it('the nav item should have the correct link', () => {
    expect(menuItem.find('a.nav-link').attributes('href')).toBe('http://link')
  })

  afterAll(() => {
    menuItem.destroy()
  })
})

describe('a menu item with children', () => {
  const menuItem = mount(MenuItem, {
    propsData: {
      text: 'Text',
      link: 'http://link',
      isLast: false,
      children: [
        {
          text: 'Child 1',
          isLast: false
        },
        {
          text: 'Child 2',
          isLast: false
        }
      ]
    }
  })

  it('should render a dropdown with the text', () => {
    expect(menuItem.find('.dropdown')).toBeTruthy()
    expect(menuItem.find('.dropdown > .dropdown-toggle').text()).toBe('Text')
  })

  it('should have the correct number of children', () => {
    expect(menuItem.find('.dropdown-menu').findAll('li')).toHaveLength(2)
  })

  afterAll(() => {
    menuItem.destroy()
  })
})
