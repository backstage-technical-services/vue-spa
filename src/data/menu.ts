import { v4 } from 'uuid'
import { MainMenu } from '@/types/menu'

const menu: MainMenu = [
  {
    id: v4(),
    text: 'Events',
    link: '/events'
  },
  {
    id: v4(),
    text: 'Members',
    link: '/members'
  },
  {
    id: v4(),
    text: 'Equipment',
    children: [
      { id: v4(), text: 'Asset database', link: '/asset-database' },
      { id: v4(), text: 'Repairs database', link: '/repairs-database' }
    ]
  },
  {
    id: v4(),
    text: 'Training',
    children: [
      { id: v4(), text: 'Skills', link: '/skills' },
      {
        id: v4(),
        text: 'Skill applications',
        link: '/skill-applications'
      },
      { id: v4(), text: 'Skill categories', link: '/skill-categories' }
    ]
  },
  {
    id: v4(),
    text: 'Safety',
    children: [
      { id: v4(), text: 'Report incident', link: '/report/incident' },
      { id: v4(), text: 'Report near miss', link: '/report/near-miss' }
    ]
  },
  {
    id: v4(),
    text: 'Resources',
    link: '/resources'
  }
]

export default menu
