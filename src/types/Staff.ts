export type Social = {
  id?: number
  media?: string
  link?: string
}

export type Staff = {
  name?: string
  role?: string
  tel?: string | null
  email?: string | null
  photo?: string
  social?: Social[]
}

export interface StaffData {
  id?: number
  attributes?: Staff
}
