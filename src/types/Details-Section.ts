export type Video = {
  id: number
  url: string
  title?: string
  duration?: number
  description?: string
}

export type Quote = {
  id: number
  quote: string
  name?: string
  role?: string
}

export interface Data {
  id: number
  __component?: string
  title?: string
  content: string
  link?: string
  label?: string
  image?: string
  reverse?: boolean
  video?: Video
  quote?: Quote
}
