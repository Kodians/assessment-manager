import React from 'react'

import { AssessmentRelatedClassAndModuleContainter, Auth, SharedModal } from '@components'
import { useAuth } from '@hooks'
import { Grid, IconButton, Typography } from '@mui/material'

import { ImCancelCircle } from 'react-icons/im'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const gridRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)

  const getSize = () => {
    if (gridRef.current) {
      const { width } = gridRef.current.getBoundingClientRect()
      if (width < 600) {
        return 'small'
      } else if (width < 800) {
        return 'medium'
      } else {
        return 'large'
      }
    }
    return 'small'
  }

  return (
    <div ref={gridRef}>
      <h1>Home page</h1>
      {user && <h2>Hello {user.username}</h2>}
      <Auth />
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <SharedModal open={open} closeModal={() => setOpen(false)} size={getSize()}>
          <Grid container>
            <Grid container item justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '1rem' }}>
              <Grid item>
                <Typography variant="h6">Partager</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => setOpen(false)}>
                  <ImCancelCircle />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <AssessmentRelatedClassAndModuleContainter />
            </Grid>
          </Grid>
        </SharedModal>
      )}
    </div>
  )
}
