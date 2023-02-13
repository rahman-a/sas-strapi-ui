import { Data } from './Details-Section'
import { Links } from './Menu'

export type TabbedInterfaceItem = {
  id: number
  tabTitle: string
  panelTitle: string
  panelDescription: string
  links: Links
}

export interface TabbedInterface {
  id: number
  title: string
  tabs: TabbedInterfaceItem[]
}

export type TabbedNavbarPanel = {
  id: number
  title: string
  icon: string
  detailedSection: Data
}

export interface TabbedNavbar {
  id: number
  panels: TabbedNavbarPanel[]
}

export type TabFilteredItem = {
  id: number
  title: string
  links: Links
}

export interface TabFiltered {
  id: number
  title: string
  tabs: TabFilteredItem[]
}
