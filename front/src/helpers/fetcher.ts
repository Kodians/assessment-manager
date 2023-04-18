export const fetcher = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`http://localhost:2000/api${endpoint}`, options)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
