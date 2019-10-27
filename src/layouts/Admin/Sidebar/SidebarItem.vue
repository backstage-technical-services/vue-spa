<template>
  <router-link :to="link" class="sidebar-item">
    <span class="sidebar-icon">
      <font-awesome-icon :icon="icon" v-if="icon"/>
    </span>
    <span class="sidebar-text">{{ text }}</span>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SidebarItemProps } from '@/layouts/Admin/Sidebar/types'

@Component
export default class SidebarItem extends Vue {
  @Prop() readonly icon!: SidebarItemProps['icon'];
  @Prop() readonly text!: SidebarItemProps['text'];
  @Prop() readonly link!: SidebarItemProps['link'];
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixins";

  .sidebar-item {
    @include transition(color);

    color: #555;

    &:hover {
      color: #111;
      cursor: pointer;
    }

    /*&.router-link-active {*/
    /*  color: #000;*/
    /*}*/

    & > .sidebar-text {
      padding: 0.25em 0;
    }
  }
</style>
