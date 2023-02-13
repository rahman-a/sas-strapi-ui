import getQueryString from '@lib/getQueryString'
const ROOT_URL = 'http://localhost:5000/api/v1'
interface IQuery {
  country?: string
  title?: string
  skills?: string[]
  jobType?: string
}

export const getAllSkills = async () => {
  try {
    const response = await fetch(`${ROOT_URL}/jobs/skills`)
    const data = await response.json()
    return data.skills
  } catch (error: any) {
    return error.message
  }
}

export const getFilteredJobs = async (query?: IQuery) => {
  const { skills, ...rest } = query!
  console.log('🚀getFilteredJobs ~ query', query)
  // create query string
  const queryString = getQueryString(rest)
  // create skills query string
  const skillsQueryString = getQueryString(skills, 'skills')
  // append skills query string to query string
  const finalQueryString =
    queryString.length > 0 && skillsQueryString.length > 0
      ? queryString + '&' + skillsQueryString
      : queryString.length > 0
      ? queryString
      : skillsQueryString.length > 0
      ? '?' + skillsQueryString
      : ''
  try {
    const response = await fetch(`${ROOT_URL}/jobs/filtered${finalQueryString}`)
    const data = await response.json()
    return data.jobs
  } catch (error: any) {
    console.log('fetch filtered jobs: ', error.message)
    return error.message
  }
}

export const postJobApplication = async ({
  application,
  id,
}: {
  application: any
  id: string
}) => {
  try {
    const response = await fetch(`${ROOT_URL}/applications/${id}`, {
      method: 'POST',
      body: application,
    })
    const data = await response.json()
    if (response.ok) return data
    throw new Error(data.message)
  } catch (error: any) {
    throw new Error(error.message)
  }
}
