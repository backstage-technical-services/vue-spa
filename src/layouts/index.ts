import AdminLayout from '@/layouts/Admin'
import ErrorLayout from '@/layouts/Error'
import MainLayout from '@/layouts/Main'
import { Vue } from 'vue/types/vue'

export enum Layout {
  MAIN = 'main',
  ADMIN = 'admin',
  ERROR = 'error'
}

export const resolveLayout = (layout?: Layout): Vue.VueConstructor => {
  if (layout === Layout.ADMIN) {
    return AdminLayout
  } else if (layout === Layout.ERROR) {
    return ErrorLayout
  } else {
    return MainLayout
  }
}

export {
  AdminLayout,
  ErrorLayout,
  MainLayout
}
