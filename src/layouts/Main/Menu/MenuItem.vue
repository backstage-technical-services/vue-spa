<template>
  <b-dropdown-divider v-if="!id && !text"></b-dropdown-divider>
  <b-nav-item :to="itemLink" v-else-if="!hasChildren">{{
    text
    }}
  </b-nav-item>
  <b-nav-item-dropdown :text="text" v-else>
    <menu-item
      :is-last="index === children.length - 1"
      :key="child.id"
      v-bind="child"
      v-for="(child, index) in children"
    />
  </b-nav-item-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { MenuItemProps } from './types'

@Component({
  components: {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    MenuItem
  }
})
export default class MenuItem extends Vue {
  @Prop() readonly id!: MenuItemProps['id']
  @Prop() readonly text!: MenuItemProps['text']
  @Prop({ required: false }) readonly link!: MenuItemProps['link']
  @Prop({ required: false }) readonly children!: MenuItemProps['children']
  @Prop() readonly isLast!: MenuItemProps['isLast']

  get itemLink(): string {
    return this.link || '#'
  }

  get hasChildren(): boolean {
    return this.children !== undefined && this.children.length > 0
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .dropdown-menu {
    background: #222;
    font-size: 14px;
  }
</style>
