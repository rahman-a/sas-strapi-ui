export type Member = {
  id: number
  name: string
  role: string
  quote: string
  photo: string
  link: string
}

export interface Team {
  id: number
  __component: string
  title: string
  content: string
  members: Member[]
}
