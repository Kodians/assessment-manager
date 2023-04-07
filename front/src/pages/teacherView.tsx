import * as React from 'react'

import { Header } from '@components'
import { SideBar } from '@components'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const navItems = ['Home', 'About', 'Contact']

export const TeacherView: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header setMobileOpen={setMobileOpen} navItems={navItems} />
      <Box component="nav">
        <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} navItems={navItems} />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>TEACHER VIEW</Typography>
      </Box>
    </Box>
  )
}
