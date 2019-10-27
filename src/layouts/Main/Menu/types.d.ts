import { MainMenuItem } from '@/types/menu'

interface AdditionalMenuItemProps {
  id: string;
  isLast: boolean;
}

export type MenuItemProps = MainMenuItem & AdditionalMenuItemProps

export interface MenuClasses {
  [key: string]: boolean;
}
