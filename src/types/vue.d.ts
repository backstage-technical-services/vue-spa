// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $title?: (() => string) | string;
  }
}
