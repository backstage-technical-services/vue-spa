<template>
  <div class="header-logo">
    <router-link to="/admin">
      <img
        alt="Backstage Logo"
        src="../../../assets/images/logo_transparent.png"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
}
</script>

<style lang="scss" scoped>
  .header-logo {
    margin-left: 0.5em;
    height: 100%;

    img {
      max-height: 100%;
    }
  }
</style>
