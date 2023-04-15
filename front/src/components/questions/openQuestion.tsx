import React from 'react'

import { TextField } from '@mui/material'

export const OpenQuestion = () => {
  const [openQuestion, setOpenQuestion] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setOpenQuestion(value)
  }
  return (
    <div style={{ display: 'flex' }}>
      <label style={{ margin: '10px' }}>Question</label>
      <TextField
        style={{ width: '450px' }}
        placeholder="La question ?"
        size="small"
        id="openQuestion"
        variant="outlined"
        value={openQuestion}
        onChange={handleChange}
      />
    </div>
  )
}
