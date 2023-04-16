import React from 'react'

import { Auth } from '@components'
import { AddAndEditClassForm } from '@components'
import { useAuth } from '@hooks'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Home page</h1>
      {user && <h2>Hello {user.username}</h2>}
      <Auth />
      <AddAndEditClassForm />
    </div>
  )
}
