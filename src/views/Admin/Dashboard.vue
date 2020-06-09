<template>
  <div>
    <h1>
      <font-awesome-icon :icon="headerIcon"/>
      Dashboard
    </h1>
    <div class="dashboard">
      <div :key="i" class="dashboard-item" v-for="i in 20">
        <div class="dashboard-item-header">Dashboard item</div>
        <div class="dashboard-item-body">
          <p>asdasda</p>
          <p>asdasdaasdasdasda</p>
          <p>asdasdasdasdasdasdasdasdaa</p>
          <p>asdasdaasdsada</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Dashboard extends Vue {
  readonly $title = 'Admin Dashboard';
  private headerIcon = faCog;
}
</script>

<style lang="scss" scoped>
  .dashboard {
    $inner-padding: 0.75rem;
    $border-radius: 5px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -10px 0;

    .dashboard-item {
      background: #fff;

      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: $border-radius;

      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
      margin: 10px 0;

      .dashboard-item-header {
        background: #f7f7f7;

        border-bottom: 1px solid rgba(0, 0, 0, 0.075);
        border-radius: $border-radius $border-radius 0 0;

        font-weight: bold;

        padding: 0.5rem $inner-padding;
      }

      .dashboard-item-body {
        padding: $inner-padding;

        :last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
