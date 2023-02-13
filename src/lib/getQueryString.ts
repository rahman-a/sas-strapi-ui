export default function getQueryString(queries: any, key?: string) {
  if (!queries) return ''
  if (queries instanceof Array) {
    return queries.length > 0
      ? new URLSearchParams({ [key as string]: queries.join(',') }).toString()
      : ''
  }
  const queriesData: { [key in string]: string } = {}
  for (const key in queries) {
    if (queries[key]) {
      queriesData[key] = queries[key]
    }
  }
  return Object.keys(queriesData).length > 0
    ? '?' + new URLSearchParams({ ...queriesData }).toString()
    : ''
}
