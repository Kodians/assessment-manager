import React, { useState } from 'react'

import { AddAndEditClassForm, AddAndEditModuleForm, SharedModal } from '@components'
import { Button } from '@mui/material'

export const Module: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handelOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h3>Module</h3>
      <Button size="small" variant="contained" style={{ height: '35px', margin: '15px' }} onClick={handelOpen}>
        Ajouter
      </Button>
      <SharedModal open={open} closeModal={handleClose} size="large">
        <div style={{}}>
          <AddAndEditModuleForm />
        </div>
      </SharedModal>
    </div>
  )
}
