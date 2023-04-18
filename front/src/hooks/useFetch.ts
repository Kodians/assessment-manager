import React from 'react'

import { fetcher } from '@helpers'

import axios, { AxiosResponse } from 'axios'

export const useFetch = (url: string, options: RequestInit = {}) => {
  const [data, setData] = React.useState<AxiosResponse<any> | null>(null)
  const [error, setError] = React.useState<string | unknown>('')
  const [loading, setLoading] = React.useState(false)

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:2000/api${url}`)
      setData(response)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [])

  return { data, error, loading }
}
