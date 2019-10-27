<template>
  <div class="error-wrapper">
    <div class="error-code" v-if="code !== null">{{ code }}</div>
    <div class="error-content">
      <div class="error-content--details">{{ details }}</div>
      <div class="error-content--links">
        <router-link to="/">
          <font-awesome-icon :icon="icons.home"></font-awesome-icon>
        </router-link>
        <a
          href="https://gitlab.com/backstage-technical-services/website/hub/issues/new"
          target="_blank"
          title="Report issue"
        >
          <font-awesome-icon :icon="icons.gitlab"></font-awesome-icon>
          <span class="fa fa-gitlab"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ErrorData, ErrorProps } from '@/views/Error/types'

@Component
export default class Error extends Vue {
  readonly $title = () => `Error ${this.code}`;

  @Prop({ default: 500 }) readonly code!: ErrorProps['code'];
  @Prop() readonly details!: ErrorProps['details'];

  private icons: ErrorData['icons'] = {
    home: faHome,
    gitlab: faGitlab
  };
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixins";

  .error-wrapper {
    max-width: 600px;
    position: relative;
  }

  .error-code {
    color: rgba($color-bts-yellow-dark, 0.1);
    font-size: 23em;
    font-weight: bold;
    text-align: center;
  }

  .error-content {
    font-size: 2.5em;
    font-weight: 100;
    left: 0;
    padding: 2em 1em 1em;
    position: absolute;
    top: 3em;
    width: 100%;
    z-index: 500;

    .error-content--links {
      font-size: 0.8em;
      margin-top: 1em;
      text-align: center;
      width: 100%;

      a {
        @include transition(opacity);
        color: #fff;
        display: inline-block;
        margin: 0 0.25em;
        opacity: 0.5;

        &:hover {
          opacity: 1;
          text-decoration: none;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
