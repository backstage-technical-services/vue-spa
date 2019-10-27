<template>
  <div id="app" layout="main">
    <app-menu/>
    <main>
      <router-view></router-view>
    </main>
    <app-footer/>
  </div>
</template>

<script lang="ts">
import AppMenu from './Menu'
import AppFooter from './Footer'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AppMenu,
    AppFooter
  }
})
export default class MainLayout extends Vue {
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/themes/general";

  main {
    flex: 1;
    font-weight: 300;
    margin-top: $navbar-height-large;
    padding: 0 0.75em 1.5em;

    & > ::v-deep * {
      margin-top: 2em;
    }
  }
</style>
