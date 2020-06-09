import { MainMenuItem } from '@/types/menu'

interface AdditionalMenuItemProps {
  isLast: boolean;
}

export type MenuItemProps = MainMenuItem & AdditionalMenuItemProps

export interface MenuClasses {
  [key: string]: boolean;
}
