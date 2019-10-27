<template>
  <div>
    <a
      :href="link.link"
      :key="link.link"
      :title="link.title"
      target="_blank"
      v-for="link in links"
    >
      <font-awesome-icon :icon="link.icon"></font-awesome-icon>
    </a>
  </div>
</template>

<script lang="ts">
import { faFacebookF, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Component, Vue } from 'vue-property-decorator'
import { SocialLink } from '@/layouts/Main/Footer/types'

@Component
export default class Social extends Vue {
  private links: SocialLink[] = [
    {
      link: 'https://www.facebook.com/BackstageTechnicalServices',
      title: 'Follow us on facebook',
      icon: faFacebookF
    },
    {
      link: 'https://www.twitter.com/backstagetech',
      title: 'Follow us on twitter',
      icon: faTwitter
    },
    {
      link: 'https://gitlab.com/backstage-technical-services/website/hub/issues/new',
      title: 'Report an issue',
      icon: faGitlab
    }
  ];
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars";

  div {
    text-align: center;

    & > a {
      background: #222;
      border-radius: 20px;
      color: inherit;
      display: inline-block;
      font-size: 17px;
      height: 40px;
      line-height: 40px;
      margin: 0 0.2em;
      text-align: center;
      width: 40px;

      &:hover {
        background: #343434;
        color: #ccc;
        text-decoration: none;
      }

      &:focus {
        outline: none;
      }

      .svg--inline-fa {
        margin: 0;
        padding: 0;
      }
    }
  }

  @media (min-width: map-get($grid-breakpoints, md)) {
    div {
      text-align: right;
    }
  }
</style>
