import axios from 'axios'
import { FormData } from '@customTypes/Contact-us'

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_LOCAL

interface FetcherOptions {
  api?: string
  url: string
  options?: RequestInit
}

export default async function fetcher({ api, url, options }: FetcherOptions) {
  api = api || strapiUrl
  try {
    const response = await axios.get(`${api}${url}`)
    return response.data
  } catch (error) {
    console.log('Error: ', error)
  }
}

export const postContactData = async (data: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SAS_PANEL_API}/api/v1/contacts`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
