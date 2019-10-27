<template>
  <div :class="{ expanded: isExpanded }" class="sidebar-section">
    <div @click="toggle" class="sidebar-item sidebar-header">
      <span class="sidebar-icon">
        <font-awesome-icon :icon="icon" v-if="icon"/>
      </span>
      <router-link :to="link" class="sidebar-text" v-if="link">
        {{ text }}
      </router-link>
      <span class="sidebar-text" v-else>{{ text }}</span>
    </div>

    <div class="sidebar-submenu" v-if="items.length > 0 && isExpanded">
      <sidebar-item :key="index" v-bind="item" v-for="(item, index) in items"/>
    </div>
  </div>
</template>

<script lang="ts">
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { SidebarItemProps } from './types'
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'

@Component({
  components: {
    SidebarItem
  }
})
export default class SidebarSection extends Vue {
  @Prop() readonly index!: number;
  @Prop() readonly icon!: IconDefinition;
  @Prop() readonly text!: string;
  @Prop({ required: false }) readonly link?: string;
  @Prop({ required: false }) readonly items?: SidebarItemProps[];
  @Prop() readonly isExpanded!: boolean;

  @Emit('toggle')
  toggle() {
    return this.index
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixins";

  $sidebar-header-padding: 0.75rem;
  $sidebar-submenu-padding: 1rem;
  $sidebar-header-text-color: #353535;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  .sidebar-section {
    .sidebar-header {
      color: $sidebar-header-text-color;
      font-size: 14px;
      padding: 0.75em 0.5em;

      &:hover {
        @include transition(background);

        background: rgba(0, 0, 0, 0.075);
        cursor: pointer;
      }

      @include fa() {
        color: darken($sidebar-header-text-color, 5%);
      }
    }

    .sidebar-submenu {
      font-size: 13px;
      padding: 0.5em 0.5em 0.5em 1em;
    }

    &.expanded {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  ::v-deep .sidebar-item {
    $icon-width: 2em;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;

    .sidebar-icon {
      text-align: center;
      margin-right: 0.5em;
      width: 2em;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sidebar-text {
      flex: 1;

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
</style>
