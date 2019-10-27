import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface MainMenuItem {
  id: string;
  text: string;
  link?: string;
  children?: MainMenuItem[];
}

export type MainMenu = MainMenuItem[]

export interface AdminMenuItem {
  icon: IconDefinition;
  text: string;
  link?: string;
  items?: AdminMenuItem[];
}

export type AdminMenu = AdminMenuItem[]
