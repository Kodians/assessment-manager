import React, { useEffect, useState } from 'react'

import { AddAndEditClassForm, CustomTable, SharedModal } from '@components'
import { getSize } from '@helpers'
import { useFetch } from '@hooks'
import { Box, Button, Divider, Typography } from '@mui/material'

const headerCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'actions', label: 'Actions' },
]

export const Classe: React.FC<any> = ({ appRef }: any) => {
  const [open, setOpen] = useState(false)
  const { data, loading } = useFetch('/classes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cors: 'no-cors',
    },
  })

  const handelOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    console.log(data?.data)
  }, [data])

  return (
    <div
      className="container"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ margin: '15px', backgroundColor: '#F5F5F5', padding: '15px', borderRadius: '5px', width: '100%' }}
      >
        Vos classes
      </Typography>
      <Button size="small" variant="contained" style={{ height: '35px', margin: '15px' }} onClick={handelOpen}>
        Ajouter
      </Button>
      <Divider />
      {loading && <p>Loading...</p>}
      <CustomTable headerCells={headerCells} rows={data?.data.data} />
      <SharedModal open={open} closeModal={handleClose} size={getSize(appRef)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddAndEditClassForm />
        </Box>
      </SharedModal>
    </div>
  )
}
