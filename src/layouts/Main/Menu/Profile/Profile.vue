<template>
  <ProfileMenu v-if="isAuthenticated" />
  <LogIn v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LogIn from './LogIn.vue'
import ProfileMenu from './Menu.vue'

@Component({
  components: {
    LogIn,
    ProfileMenu
  }
})
export default class Profile extends Vue {
  get isAuthenticated(): boolean {
    return this.$store.getters['auth/isAuthenticated']
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../assets/css/mixins";

  $navbar-profile-size: 40px;

  .navbar-profile-link-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    &:hover,
    &:active,
    &:focus {
      background: $navbar-bg-color-hover;
    }

    ::v-deep .navbar-profile-link {
      background: #888;
      border-radius: $navbar-profile-size/2;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 1em;
      height: $navbar-profile-size;
      width: $navbar-profile-size;

      @include fa() {
        color: #333;
        font-size: 18px;
      }
    }
  }
</style>
