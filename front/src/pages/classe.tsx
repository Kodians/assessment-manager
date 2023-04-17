import React, { useState } from 'react'

import { AddAndEditClassForm, SharedModal } from '@components'
import { Button } from '@mui/material'

export const Classe: React.FC = () => {
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
      <SharedModal open={open} closeModal={handleClose} size="large">
        <div style={{}}>
          <AddAndEditClassForm />
        </div>
      </SharedModal>
    </div>
  )
}
