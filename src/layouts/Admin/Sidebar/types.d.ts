import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
  link: string;
}

interface SidebarData {
  expandedMenu: number | null;
}
