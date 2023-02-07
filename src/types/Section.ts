export interface Card {
  id: string
  title: string
  content: string
  image: string
  link: string
  label: string | null
}

export interface MoreCard {
  _id: string
  title: string
  description: string
  button: string
  link: string
}

export interface FeatureCard {
  _id: string
  title: string
  text: string
  link: string
}

export interface Details {
  _id: string
  title: string
  'sub-title'?: string
  description: string
  image: string
  reverse?: boolean
}

export interface Wrapper {
  id: number
  title: string
  cards: Card[]
}

export interface Section {
  _id: string
  details: Details
  cards: Card[]
}
