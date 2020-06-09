<template>
  <div id="app" layout="error">
    <div id="app-internal">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ErrorLayout extends Vue {
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/themes/general";

  #app-internal {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
