<template>
  <component :is="layout"></component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { resolveLayout } from '@/layouts'

@Component
export default class App extends Vue {
  get layout() {
    return resolveLayout(this.$route.meta.layout)
  }
}
</script>

<style lang="scss">
  @import "assets/css/vars";

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    font-size: $font-size-main;
    margin: 0;
    min-height: 100%;
    padding: 0;
    position: relative;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
  }
</style>
