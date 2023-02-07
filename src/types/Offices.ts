import { StaffData } from './Staff'

export type ListType = 'countries' | 'cities' | 'offices' | 'details'

export type OfficeAttributes = {
  name?: string | null // in case of city has multiple offices, name must provided
  address: string
  lat: number | null
  lng: number | null
  tel?: string | null
  fax?: string | null
  image?: string | null
  staff: { data: StaffData[] }
}

export type Office = {
  id: number
  attributes: OfficeAttributes
}

export type CityAttributes = {
  name: string
  lat?: number
  lng?: number
  offices: { data: Office[] }
}

export type City = {
  id: number
  attributes: CityAttributes
}

export type countryAttributes = {
  name: string
  abbr: string | null
  link: string
  lat?: number | null
  lng?: number | null
  cities: { data: City[] }
}

export type Country = {
  id: number
  attributes: countryAttributes
}

export type Countries = { data: Country[] }
