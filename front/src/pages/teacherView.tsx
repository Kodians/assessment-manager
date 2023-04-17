import * as React from 'react'

import { Layout } from '@components'
import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

export const TeacherView: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Layout>
        <Outlet />
      </Layout>
    </Box>
  )
}
