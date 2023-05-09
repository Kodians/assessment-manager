import React from 'react'

import { fetcher } from '@helpers'

export const useMutation = (url: string, options: RequestInit = {}) => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState<string | unknown>('')
  const [loading, setLoading] = React.useState(false)

  const mutate = React.useCallback(async (body: any) => {
    setLoading(true)
    console.log(body, 'body')
    try {
      const response = await fetcher(url, {
        ...options,
        body: JSON.stringify(body),
      })

      setData(response)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, error, loading, mutate }
}
