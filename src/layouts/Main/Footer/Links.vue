<template>
  <div>
    <ul>
      <li :key="link.link" v-for="(link, index) in links">
        <router-link :to="link.link">{{ link.text }}</router-link>
        <span v-if="index !== links.length - 1">/</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { FooterLink } from './types'

@Component
export default class Links extends Vue {
  private links: FooterLink[] = [
    { text: 'Contact Us', link: '/contact' },
    { text: 'Book Us', link: '/book-us' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Terms and Conditions', link: '/terms-and-conditions' },
    { text: 'Privacy Policy', link: '/privacy-policy' }
  ];
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars";

  div {
    text-align: center;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;

        span {
          margin: 0 0.75em;
        }
      }
    }
  }

  @media (min-width: map-get($grid-breakpoints, md)) {
    div {
      text-align: left;
    }
  }
</style>
