// eslint-disable-next-line unused-import
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $title?: (() => string) | string
  }
}
