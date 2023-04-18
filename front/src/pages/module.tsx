import React, { useState } from 'react'

import { AddAndEditModuleForm, CustomTable, SharedModal } from '@components'
import { getSize } from '@helpers'
import { Box, Button, Divider } from '@mui/material'

const headerCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'actions', label: 'Actions' },
]

const rows = [
  {
    id: 1,
    name: "Architecture des Systèmes d'Information",
    description: "Module de l'UE Architecture des Systèmes d'Information",
  },
  {
    id: 2,
    name: "Sécurité des Systèmes d'Information",
    description: "Module de l'UE Sécurité des Systèmes d'Information",
  },
  { id: 3, name: 'Gestion de Projet', description: "Module de l'UE Gestion de Projet" },
  { id: 4, name: 'Gestion de la Qualité', description: "Module de l'UE Gestion de la Qualité" },
  { id: 5, name: 'Gestion de la Connaissance', description: "Module de l'UE Gestion de la Connaissance" },
]

export const Module: React.FC<any> = ({ appRef }: any) => {
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
      <h3>Module</h3>
      <Button size="small" variant="contained" style={{ height: '35px', margin: '15px' }} onClick={handelOpen}>
        Ajouter
      </Button>
      <Divider />
      <CustomTable headerCells={headerCells} rows={rows} />
      <SharedModal open={open} closeModal={handleClose} size={getSize(appRef)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddAndEditModuleForm />
        </Box>
      </SharedModal>
    </div>
  )
}
