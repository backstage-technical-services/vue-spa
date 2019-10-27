import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'
import {
  faCalendar,
  faCalendarAlt,
  faCalendarDay,
  faCalendarPlus,
  faCogs,
  faDatabase,
  faFileArchive,
  faList,
  faPlus,
  faQuoteLeft,
  faStar,
  faToolbox,
  faTrophy,
  faUserFriends,
  faUserPlus,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import {
  faBoxBallot,
  faCabinetFiling,
  faFilePlus,
  faFolderPlus,
  faFolders,
  faFolderTree,
  faFragile,
  faStars,
  faTrophyAlt,
  faUsersCrown
} from '@fortawesome/pro-solid-svg-icons'
import { AdminMenu } from '@/types/menu'

const menu: AdminMenu = [
  {
    icon: faCogs,
    text: 'Dashboard',
    link: '/admin'
  },
  {
    icon: faUsers,
    text: 'Users',
    items: [
      { icon: faUsers, text: 'View users', link: '/admin/users' },
      { icon: faUserPlus, text: 'Add users', link: '/admin/users/add' },
      {
        icon: faUserFriends,
        text: 'Manage groups',
        link: '/admin/user-groups'
      },
      { icon: faUsersCrown, text: 'The committee', link: '/admin/committee' }
    ]
  },
  {
    icon: faCalendar,
    text: 'Events',
    items: [
      { icon: faCalendarAlt, text: 'View events', link: '/admin/events' },
      { icon: faCalendarPlus, text: 'Add event', link: '/admin/events/add' },
      { icon: faCalendarDay, text: 'Bookings', link: '/admin/bookings' }
    ]
  },
  {
    icon: faToolbox,
    text: 'Equipment',
    items: [
      {
        icon: faDatabase,
        text: 'Asset database',
        link: '/admin/asset-database'
      },
      { icon: faFragile, text: 'Breakages', link: '/admin/breakages' },
      { icon: faPlus, text: 'Add breakage', link: '/admin/breakages/add' }
    ]
  },
  {
    icon: faStar,
    text: 'Training Skills',
    items: [
      { icon: faStar, text: 'View skills', link: '/admin/skills' },
      {
        icon: faStarOutline,
        text: 'Skill applications',
        link: '/admin/skill-applications'
      },
      {
        icon: faStars,
        text: 'View categories',
        link: '/admin/skill-categories'
      },
      { icon: faList, text: 'Skills log', link: '/admin/skill-log' }
    ]
  },
  {
    icon: faQuoteLeft,
    text: 'Quotes',
    link: '/admin/quotes'
  },
  {
    icon: faTrophy,
    text: 'Awards',
    items: [
      { icon: faTrophy, text: 'View awards', link: '/admin/awards' },
      {
        icon: faTrophyAlt,
        text: 'View award seasons',
        link: '/admin/award-seasons'
      }
    ]
  },
  {
    icon: faBoxBallot,
    text: 'Elections',
    link: '/admin/elections'
  },
  {
    icon: faCabinetFiling,
    text: 'Resources',
    items: [
      { icon: faFolderTree, text: 'View resources', link: '/admin/resources' },
      { icon: faFilePlus, text: 'Add resource', link: '/admin/resources/add' },
      {
        icon: faFolders,
        text: 'View categories',
        link: '/admin/resource-categories'
      },
      {
        icon: faFolderPlus,
        text: 'Add category',
        link: '/admin/resource-categories/add'
      }
    ]
  },
  {
    icon: faFileArchive,
    text: 'Backups',
    link: '/admin/backups'
  }
]

export default menu
