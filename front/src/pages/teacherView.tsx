import * as React from 'react'

import { Layout } from '@components'

import { Outlet } from 'react-router-dom'

export const TeacherView: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
