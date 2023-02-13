import { HeroSection } from './Hero-Section'
import { Card } from './Section'
import { Data } from './Details-Section'
import { Links } from './Menu'
import { StaffData } from './Staff'
import { TabbedInterface, TabbedNavbar, TabFiltered } from './Tabbed'
export type CarouselItem = {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export type Carousel = {
  id: number
  __component: string
  items: CarouselItem[]
}

export type Announcement = {
  id: number
  __component: string
  title: string
  button: string
  href: string
}

export type WebTile = {
  id: number
  title: string
  subtitle: string
  link: string
  icon: string
}

export type SocialPlatform = {
  id: number
  name: string
  link: string
  icon: string
}

export type Social = {
  id: number
  label: string
  platforms: SocialPlatform[]
}

export interface Division {
  id: number
  heroSection: HeroSection
  featured: {
    title: string
    cards: Card[]
  }
  navigation: {
    title: string
    links: Links
  }
  textBlock: Data
  footer: Data
}

export interface IndustryPageLayout {
  id: number
  heroSection: HeroSection
  textBlock: Data
  tabbedInterface: TabbedInterface
  textBlock2: Data
  featured: {
    title: string
    cards: Card[]
  }
  insights: {
    title: string
    cards: Card[]
  }
  staff: StaffData[]
}

export interface ServicePageLayout {
  id: number
  heroSection: HeroSection
  textBlock: Data
  tabbedNavbar: TabbedNavbar
  textBlock2: Data
  featured: {
    title: string
    cards: Card[]
  }
  insights: {
    title: string
    cards: Card[]
  }
  webTile: WebTile
  staff: StaffData[]
}

export interface IssuePageLayout {
  id: number
  heroSection: HeroSection
  textBlock: Data
  textBlock2: Data
  textBlock3: Data
  detailedCards: {
    id: number
    title: string
    cards: Card[]
  }
  filteredList: TabFiltered
  staff: StaffData[]
}
