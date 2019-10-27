<template>
  <div id="app">
    <header>
      <admin-header/>
    </header>
    <div class="app-body">
      <aside class="sidebar">
        <admin-sidebar/>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AdminHeader from './Header'
import AdminSidebar from './Sidebar'

@Component({
  components: {
    AdminHeader,
    AdminSidebar
  }
})
export default class AdminLayout extends Vue {
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/themes/admin";

  $sidebar-width: 220px;
  $header-height: 60px;
  $header-blur: 5px;

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    position: fixed;
    z-index: 1000;
    height: $header-height;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex: 0 0 $header-height;
    align-items: center;

    background: $header-bg-color;
    box-shadow: 0 1px $header-blur $header-blur-color;
  }

  .app-body {
    margin-top: $header-height;

    display: flex;
    flex-direction: row;
    flex: 1;
    overflow-x: hidden;

    .sidebar {
      z-index: 500;
      position: fixed;

      height: calc(100vh - #{$header-height});
      overflow-x: hidden;
      overflow-y: auto;
      width: $sidebar-width;

      padding-top: $header-blur;

      background: $sidebar-bg-color;
      border-right: 1px solid $sidebar-border-color;
    }

    main {
      flex: 1;

      margin: 0 0 0 $sidebar-width;
      padding: 1.5em;

      background: $background-color;
      color: #000;
    }
  }
</style>
