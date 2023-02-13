export default async function fetcher(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}
