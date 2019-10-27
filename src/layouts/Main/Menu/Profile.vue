<template>
  <b-dropdown right>
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
    <b-dropdown-item-button>Logout</b-dropdown-item-button>
  </b-dropdown>
</template>

<script lang="ts">
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
  private profileLinkIcon = faUser;
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixins";

  .dropdown {
    display: block;
    height: 100%;

    & > ::v-deep .dropdown-toggle.btn-secondary {
      $navbar-profile-size: 40px;

      background: transparent;
      border-radius: 0;
      border: none;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 1em;
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
        background: $navbar-bg-color-hover;
        box-shadow: none;
        outline: none;
      }

      .navbar-profile-link {
        background: #888;
        border-radius: $navbar-profile-size/2;
        display: flex;
        align-items: center;
        justify-content: center;
        height: $navbar-profile-size;
        width: $navbar-profile-size;

        @include fa() {
          color: #333;
          font-size: 18px;
        }
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
