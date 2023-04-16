import React from 'react'

import { Button, CardActions, CardContent, Divider, TextField } from '@mui/material'
import Card from '@mui/material/Card'

export const AddAndEditModuleForm = () => {
  const [name, setName] = React.useState({
    label: '',
    description: '',
  })

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, label: value })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, description: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName({ label: '', description: '' })
  }
  const onClose = () => void 0

  return (
    <Card>
      <CardContent>
        <h2>Modifier un module</h2>
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
            <TextField style={{ width: '450px' }} value={name.label} onChange={handleLabelChange} sx={{ mb: 1 }} />
            <label>Description</label>
            <TextField
              style={{ width: '450px' }}
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
