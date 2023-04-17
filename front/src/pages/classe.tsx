import React, { useState } from 'react'

import { AddAndEditClassForm, SharedModal } from '@components'
import { getSize } from '@helpers'
import { Box, Button } from '@mui/material'

export const Classe: React.FC<any> = ({ appRef }: any) => {
  const [open, setOpen] = useState(false)
  const handelOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h3>Classe</h3>
      <Button size="small" variant="contained" style={{ height: '35px', margin: '15px' }} onClick={handelOpen}>
        Ajouter
      </Button>
      <SharedModal open={open} closeModal={handleClose} size={getSize(appRef)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddAndEditClassForm />
        </Box>
      </SharedModal>
    </div>
  )
}
