<template>
  <b-navbar :class="menuClasses" data-qa-id="mainMenu" fixed="top" toggleable="lg" type="dark">
    <div class="container">
      <!-- Brand -->
      <b-navbar-brand :to="{ name: 'home' }">
        <img alt="Backstage Logo" src="@/assets/images/logo_transparent.png"/>
      </b-navbar-brand>

      <!--  Toggler  -->
      <b-navbar-toggle target="menu--main"></b-navbar-toggle>

      <b-collapse id="menu--main" is-nav>
        <!--  Menu  -->
        <b-navbar-nav class="ml-auto">
          <menu-item
            :is-last="index === menu.length - 1"
            :key="item.id"
            v-bind="item"
            v-for="(item, index) in menu"
          />
        </b-navbar-nav>

        <!--  Profile  -->
        <Profile/>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script lang="ts">
import MenuItem from './MenuItem.vue'
import Profile from './Profile'
import { Component, Vue } from 'vue-property-decorator'
import { MainMenu } from '@/types/menu'
import { MenuClasses } from '@/layouts/Main/Menu/types'

@Component({
  components: {
    MenuItem,
    Profile
  }
})
export default class Menu extends Vue {
  private scrollPosition = 0

  get menu(): MainMenu {
    return this.$store.getters['menu/getPrimary'] || []
  }

  get menuClasses(): MenuClasses {
    return {
      shrink: this.scrollPosition > 80
    }
  }

  handleScroll() {
    this.scrollPosition = document.documentElement.scrollTop
  }

  created() {
    this.$store.dispatch('menu/refreshPrimaryMenu')
  }

  mounted() {
    this.scrollPosition = document.documentElement.scrollTop
    window.addEventListener('scroll', this.handleScroll)
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixins";

  nav {
    @include transition(height);

    background: $navbar-bg-color;
    color: #9e9e9e;
    height: $navbar-height-large;
    padding: 0;

    &.shrink {
      height: $navbar-height-normal;
    }

    ::v-deep a {
      &:focus {
        outline: none;
      }
    }

    .container {
      height: 100%;
      align-items: stretch;
    }

    .navbar-brand {
      height: 100%;
      margin: 0;
      padding: 0;

      img {
        height: 100%;
      }
    }

    .navbar-toggler {
      align-self: center;
      padding: 0.5em 0.75em;
    }

    .navbar-nav {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
      height: 100%;

      & > .nav-item {
        display: table;
        height: 100%;

        & > ::v-deep .nav-link {
          @include transition("color");
          @include transition("background");
          $font-size: 15px/16px;

          display: table-cell;
          color: inherit;
          font-size: #{$font-size}rem;
          padding: 0 1.25em;
          text-transform: uppercase;
          vertical-align: middle;

          &:hover {
            background-color: $navbar-bg-color-hover;
            cursor: pointer;
            color: #ccc;
          }

          &.router-link-active {
            background-color: $navbar-bg-color-active;
            color: #ccc;
          }
        }
      }
    }
  }
</style>
