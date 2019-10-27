<template>
  <div class="sidebar-nav">
    <sidebar-section
      :index="index"
      :is-expanded="expandedMenu === index"
      :key="index"
      @toggle="setExpanded"
      v-bind="section"
      v-for="(section, index) in menu"
    />
  </div>
</template>

<script lang="ts">
import SidebarSection from './SidebarSection.vue'
import { AdminMenu } from '@/types/menu'
import { Component, Vue } from 'vue-property-decorator'
import { SidebarData } from '@/layouts/Admin/Sidebar/types'

@Component({
  components: {
    SidebarSection
  }
})
export default class Sidebar extends Vue {
  private expandedMenu: SidebarData['expandedMenu'] = null;

  get menu(): AdminMenu {
    return this.$store.getters['menu/getAdmin'] || []
  }

  setExpanded(index: number): void {
    this.expandedMenu = this.expandedMenu === index ? null : index
  }

  created() {
    this.$store.dispatch('menu/refreshAdminMenu')
  }
}
</script>

<style lang="scss" scoped></style>
