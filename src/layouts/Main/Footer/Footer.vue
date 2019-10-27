<template>
  <footer>
    <div class="footer-row upper">
      <div class="container">
        <footer-about class="footer-item"/>
        <footer-social class="footer-item"/>
      </div>
    </div>
    <div class="footer-row lower">
      <div class="container">
        <footer-links class="footer-item"/>
        <footer-copyright class="footer-item"/>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import FooterAbout from './About.vue'
import FooterCopyright from './Copyright.vue'
import FooterLinks from './Links.vue'
import FooterSocial from './Social.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FooterAbout,
    FooterCopyright,
    FooterLinks,
    FooterSocial
  }
})
export default class Footer extends Vue {
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixins";

  footer {
    color: #666;
    font-size: 13px;
    line-height: 1.3;

    .footer-row {
      &.upper {
        background: #151515;
      }

      &.lower {
        background: #121212;
      }

      ::v-deep a {
        @include transition(color);
        color: inherit;

        &:hover,
        &:focus {
          color: #aaa;
          outline: none;
          text-decoration: none;
        }
      }
    }
  }

  @include breakpoint-to(md) {
    footer {
      .footer-row {
        .container {
          padding: 2em 1em;
          max-width: none;
          width: 100%;

          .footer-item:not(:last-child) {
            margin-bottom: 2em;
          }
        }
      }
    }
  }

  @include breakpoint-from(md) {
    footer {
      .footer-row {
        padding: 1.5em 0;

        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
</style>
