import React from 'react'

import { useMutation } from '@hooks'
import HelpIcon from '@mui/icons-material/Help'
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material'
import Card from '@mui/material/Card'

export const AddAndEditClassForm = () => {
  const [name, setName] = React.useState({
    className: '',
    classCode: '',
    classDescription: '',
  })

  const { mutate } = useMutation('/classes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, className: value })
  }

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, classCode: value })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, classDescription: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName({ className: '', classCode: '', classDescription: '' })
  }
  const onClose = () => void 0

  const createNewClass = () => {
    mutate({
      className: name.className,
      classCode: name.classCode,
      classDescription: name.classDescription,
    })
    setName({ className: '', classCode: '', classDescription: '' })
  }

  return (
    <Card>
      <CardContent>
        <h2>Classe</h2>
        <Divider />
        <div style={{ display: 'flex', margin: '15px' }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'grid',
              justifyItems: 'start',
            }}
          >
            <label>Libellé</label>
            <TextField
              style={{ minWidth: '300px' }}
              value={name.className}
              onChange={handleLabelChange}
              sx={{ mb: 1 }}
            />
            <label>Code</label>
            <TextField
              style={{ minWidth: '300px' }}
              value={name.classCode}
              onChange={handleCodeChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Le code est utilisé pour rattacher les étudiants à une classe lors de leur inscription, choisissez le bien">
                      <IconButton>
                        <HelpIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 1 }}
            />
            <label>Description</label>
            <TextField
              style={{ minWidth: '300px' }}
              value={name.classDescription}
              onChange={handleDescriptionChange}
              multiline
              rows={4}
              sx={{ mb: 1 }}
            />
            <Divider />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1, mr: 1 }}>
              <Button variant="contained" onClick={onClose} sx={{ mr: 1, backgroundColor: 'gray' }}>
                Fermer
              </Button>
              <Button type="submit" variant="contained" onClick={createNewClass}>
                Enregistrer
              </Button>
            </CardActions>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
