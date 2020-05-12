import Vue from 'vue'
import titleMixin, { getTitle } from '@/mixins/titleMixin'
import { createWrapper, mount } from '@vue/test-utils'

describe('a vue component with no title', () => {
  const vue = new Vue()

  it('getting the title should return null', () => {
    expect(getTitle(vue)).toBeNull()
  })
})

describe('a vue component with a function title', () => {
  const vue = new Vue({
    data: {
      '$title': () => 'Function Title'
    }
  })

  it('getting the title should return the title', () => {
    expect(getTitle(vue)).toBe('Function Title')
  })
})

describe('a vue component with a string title', () => {
  const vue = new Vue({
    el: '#root',
    data: {
      '$title': 'String Title'
    }
  })

  it('getting the title should return the title', () => {
    expect(getTitle(vue)).toBe('String Title')
  })
})
