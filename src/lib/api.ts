export default async function fetcher(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    return Promise.reject(data)
  }
}
