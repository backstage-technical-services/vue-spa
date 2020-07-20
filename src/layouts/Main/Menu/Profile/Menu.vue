<template>
  <b-dropdown right class="navbar-profile-link-wrapper">
    <template v-slot:button-content>
      <div class="navbar-profile-link">
        <font-awesome-icon :icon="profileLinkIcon"></font-awesome-icon>
      </div>
    </template>

    <b-dropdown-item>My profile</b-dropdown-item>
    <b-dropdown-item>My events</b-dropdown-item>
    <b-dropdown-item>My training</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item to="/admin">Admin panel</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button @click="logout">
      Logout
    </b-dropdown-item-button>
  </b-dropdown>
</template>

<script lang="ts">
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Component, Vue } from 'vue-property-decorator'
import keycloak from '@/config/auth'

@Component
export default class Menu extends Vue {
  private profileLinkIcon = faUser;

  logout() {
    keycloak.logout()
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../assets/css/mixins";

  .dropdown {
    &.show {
      background: $navbar-bg-color-hover;
    }

    & > ::v-deep .dropdown-toggle.btn-secondary {
      background: transparent;
      border-radius: 0;
      border: none;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;
      position: relative;

      &::after {
        display: none;
      }

      &:hover {
        cursor: pointer;
      }

      &:hover,
      &:active,
      &:focus {
        background: none;
        box-shadow: none;
        outline: none;
      }
    }
  }

  ::v-deep .dropdown-menu {
    $border-radius: 5px;

    background: $navbar-bg-color-hover;
    border-radius: 0 0 $border-radius $border-radius;
    border: none;
    color: $color-text;
    font-size: 13px;
    margin: 0;
    padding: 0;
    white-space: nowrap;

    li {
      border-radius: 0;
      display: block;
      font-size: inherit;
      min-width: 10em;
      width: 100%;

      &:last-child {
        &,
        & > a {
          border-bottom-left-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
        }
      }

      & > a,
      & > button,
      & > span {
        color: inherit;
        padding: 0.75em 2em 0.75em 1em;

        &:hover {
          background: rgba(255, 255, 255, 0.05);
          text-decoration: none;
        }
      }

      & > hr {
        border-color: #444;
      }
    }
  }
</style>
