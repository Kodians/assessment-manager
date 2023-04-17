import React from 'react'

import { AddAndEditModuleForm, Auth } from '@components'
import { useAuth } from '@hooks'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Home page</h1>
      {user && <h2>Hello {user.username}</h2>}
      <Auth />
      <AddAndEditModuleForm />
    </div>
  )
}
