import React from 'react'

import { useFetch } from '@hooks'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

const currencies = [
  {
    value: 'Item 1',
    label: 'Item 1',
  },
  {
    value: 'Item 2',
    label: 'Item 2',
  },
  {
    value: 'Item 3',
    label: 'Item 3',
  },
  {
    value: 'Item 4',
    label: 'Item 4',
  },
]

export const AssessmentRelatedClassAndModuleForm = () => {
  const { data, loading } = useFetch('/classes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cors: 'no-cors',
    },
  })

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '95%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField fullWidth select label="Selectionnez la classe">
          {(loading || !data?.data.success) && <p>Loading...</p>}
          {data?.data.data.map((item: { class_id: number; class_name: string; class_description: string }) => {
            console.log(item)
            return (
              <MenuItem key={item.class_id} value={item.class_id}>
                {item.class_name}
              </MenuItem>
            )
          })}
        </TextField>
        <TextField fullWidth select label="Selectionnez le module">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            label="Date de Début"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            label="Date de Fin"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
      </div>
      <Button fullWidth variant="contained" color="primary" sx={{ m: 2, width: '90%' }}>
        Ajouter
      </Button>
    </Box>
  )
}
