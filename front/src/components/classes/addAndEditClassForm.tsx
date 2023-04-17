import React from 'react'

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
    label: '',
    code: '',
    description: '',
  })
  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, label: value })
  }

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, code: value })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, description: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName({ label: '', code: '', description: '' })
  }
  const onClose = () => void 0
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
            <TextField style={{ minWidth: '300px' }} value={name.label} onChange={handleLabelChange} sx={{ mb: 1 }} />
            <label>Code</label>
            <TextField
              style={{ minWidth: '300px' }}
              value={name.code}
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
              value={name.description}
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
              <Button type="submit" variant="contained">
                Enregistrer
              </Button>
            </CardActions>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
