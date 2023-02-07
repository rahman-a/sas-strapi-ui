export type Link = {
  id: number
  label: string
  href: string
  target?: string | null
  submenu?: Link[]
}

export type Links = Link[]

export type FeaturedCard = {
  id: number
  text: string
  href: string
  target?: string | null
  image: string
}

export type Featured = {
  id: number
  title: string
  cards: FeaturedCard[]
}

export type Navigation = {
  id: number
  title: string
  links: Links
}

export interface Panel {
  id: number
  title: string
  navigation: Navigation
  featured: Featured
}

export type Menu = Panel[]
