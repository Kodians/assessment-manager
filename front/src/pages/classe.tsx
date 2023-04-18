import React, { useState } from 'react'

import { AddAndEditClassForm, CustomTable, SharedModal } from '@components'
import { getSize } from '@helpers'
import { Box, Button, Divider } from '@mui/material'

const headerCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'actions', label: 'Actions' },
]

const rows = [
  { id: 1, name: 'Miage M2 - Alternance', description: 'La classe du Master 2 Miage par apprentissage' },
  { id: 2, name: 'Miage M2 - Formation initiale', description: 'La classe du Master 2 Miage par formation initiale' },
  { id: 3, name: 'Miage M1 - Alternance', description: 'La classe du Master 1 Miage par apprentissage' },
  { id: 4, name: 'Miage M1 - Formation initiale', description: 'La classe du Master 1 Miage par formation initiale' },
  { id: 5, name: 'Miage L3 - Alternance', description: 'La classe du Licence 3 Miage par apprentissage' },
  { id: 6, name: 'Miage L3 - Formation initiale', description: 'La classe du Licence 3 Miage par formation initiale' },
  { id: 7, name: 'Miage L2 - Alternance', description: 'La classe du Licence 2 Miage par apprentissage' },
]

export const Classe: React.FC<any> = ({ appRef }: any) => {
  const [open, setOpen] = useState(false)
  const handelOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      className="container"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}
    >
      <h3>Classe</h3>
      <Button size="small" variant="contained" style={{ height: '35px', margin: '15px' }} onClick={handelOpen}>
        Ajouter
      </Button>
      <Divider />
      <CustomTable headerCells={headerCells} rows={rows} />
      <SharedModal open={open} closeModal={handleClose} size={getSize(appRef)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddAndEditClassForm />
        </Box>
      </SharedModal>
    </div>
  )
}
