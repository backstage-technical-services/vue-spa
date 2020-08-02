<template>
  <div id="app">
    <font-awesome-icon :icon="spinner" spin />
  </div>
</template>

<script lang="ts">
import { faSpinnerThird } from '@fortawesome/pro-solid-svg-icons'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  private readonly spinner = faSpinnerThird
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/themes/general";

  .svg-inline--fa {
    flex: 1;
    font-size: 2.5rem;
    margin: 0 auto;
  }
</style>
