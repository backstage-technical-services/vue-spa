<template>
  <div>
    <p>
      &copy; Backstage Technical Services {{ currentYear }}. All rights
      reserved.
    </p>
    <p class="lower">
      Generously supported by the University of Bath Alumni Fund.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Copyright extends Vue {
  private currentYear = new Date().getFullYear()
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars";

  div {
    text-align: center;

    p {
      line-height: 1;
      margin: 0.5em 0;
    }

    .lower {
      color: #444;
    }
  }

  @media (min-width: map-get($grid-breakpoints, md)) {
    div {
      text-align: right;
    }
  }
</style>
