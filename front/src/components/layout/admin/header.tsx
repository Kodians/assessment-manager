import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Header: React.FC<any> = ({ setMobileOpen, navItems }) => {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: any) => !prevState)
  }

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          {/* <MenuIcon /> */}Menu
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item: string) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
