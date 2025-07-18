

export interface SideContent {
  category: string,
  items: NavItem[],
}

interface NavItem {
  title: string
  link: string,
  icon: string,
  children: NavItem[],
  expanded: boolean
}
