import { HeroSection } from './Hero-Section'
import { Card } from './Section'
import { Data } from './Details-Section'
import { Links } from './Menu'
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
