import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from '@types'

import { Link } from 'react-router-dom'

export const Header: React.FC<any> = ({ setMobileOpen, navItems }) => {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: any) => !prevState)
  }

  return (
    <>
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
            {navItems.map((item: NavLink) => (
              <Link to={item.path} key={item.id} style={{ color: '#fff', margin: 4, textDecoration: 'none' }}>
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
