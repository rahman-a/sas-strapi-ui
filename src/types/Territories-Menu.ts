export interface Territory {
  name: string
  abbr: string | null
  link: string
  lat: number | null
  lng: number | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface TerritoryItem {
  id: number
  attributes: Territory
}

export type Territories = TerritoryItem[]
