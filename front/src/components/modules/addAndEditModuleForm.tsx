import React from 'react'

import {
  Button,
  CardActions,
  CardContent,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import Card from '@mui/material/Card'

export const AddAndEditModuleForm = () => {
  const [name, setName] = React.useState({
    label: '',
    description: '',
    classe: [],
  })

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, label: value })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName({ ...name, description: value })
  }

  const handleClasseChange = (event: any) => {
    setName((prevName) => ({ ...prevName, classe: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName({ label: '', description: '', classe: [] })
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
            <label>Classe</label>
            <FormControl sx={{ width: '450px', marginBottom: 1 }}>
              <Select
                id="classe"
                value={name.classe}
                onChange={handleClasseChange}
                renderValue={(selected) => (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as unknown as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
                multiple
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>
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
