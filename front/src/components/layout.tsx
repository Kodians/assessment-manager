import React from 'react'

import { Header } from '@components'
import { SideBar } from '@components'
import { teacherViewRoutes } from '@constants'
// import { useAuth } from '@hooks'
import { Box, Toolbar } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  // const { user } = useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  return (
    <Box>
      <CssBaseline />
      <Header setMobileOpen={setMobileOpen} navItems={teacherViewRoutes} />
      <Box component="nav">
        <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} navItems={teacherViewRoutes} />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
