import React from 'react'

import { Button, Grid, Paper, TextField, Typography } from '@mui/material'

import { AiOutlineMinus } from 'react-icons/ai'

export const MultipleChoixQuestion = () => {
  const [multipleChoiceQuestion, setMultipleChoiceQuestion] = React.useState({
    question: '',
    responses: [
      { id: 1, text: '' },
      { id: 2, text: '' },
      { id: 3, text: '' },
      { id: 4, text: '' },
    ],
  })

  const addMoreAnswers = () => {
    setMultipleChoiceQuestion((prevMultipleChoiceQuestion) => {
      const { responses } = prevMultipleChoiceQuestion
      const newResponses = [...responses, { id: responses.length + 1, text: '' }]
      return { ...prevMultipleChoiceQuestion, responses: newResponses }
    })
  }

  const removeAnswer = (id: number) => {
    setMultipleChoiceQuestion((prevMultipleChoiceQuestion) => {
      const { responses } = prevMultipleChoiceQuestion
      const index = responses.findIndex((response) => response.id === id)
      if (index === -1 || responses.length === 1) {
        return prevMultipleChoiceQuestion
      }
      return {
        ...prevMultipleChoiceQuestion,
        responses: [...responses.slice(0, index), ...responses.slice(index + 1)],
      }
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target
    if (id === multipleChoiceQuestion.question) {
      setMultipleChoiceQuestion((prevMultipleChoiceQuestion) => ({
        ...prevMultipleChoiceQuestion,
        question: value,
      }))
      return
    }
    setMultipleChoiceQuestion((prevMultipleChoiceQuestion) => {
      const { responses } = prevMultipleChoiceQuestion
      const newResponses = responses.map((response) => {
        if (response.id === Number(id)) {
          return { ...response, text: value }
        }
        return response
      })
      return { ...prevMultipleChoiceQuestion, responses: newResponses }
    })
  }

  return (
    <Paper sx={{ p: 3, '& > div': { marginBottom: 5 }, border: '1px solid #e0e0e0' }} elevation={0}>
      <Grid container spacing={4}>
        <Grid item>
          <Typography sx={{ width: 80 }}>Question : </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <TextField
              placeholder="Saisissez la question"
              id={multipleChoiceQuestion.question}
              onChange={handleChange}
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          <Typography sx={{ width: 80 }}>Choix : </Typography>
        </Grid>
        <Grid item>
          {multipleChoiceQuestion.responses.map((response) => (
            <div key={response.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
              <TextField
                placeholder="Saisissez une réponse"
                value={response.text}
                id={response.id.toString()}
                onChange={handleChange}
              />
              {multipleChoiceQuestion.responses.length > 1 && (
                <Button type="button" onClick={() => removeAnswer(response.id)} sx={{ width: 10, padding: 0 }}>
                  <AiOutlineMinus />
                </Button>
              )}
            </div>
          ))}
        </Grid>
      </Grid>
      <Button type="button" variant="contained" fullWidth sx={{ maxWidth: 100, padding: 0 }} onClick={addMoreAnswers}>
        +
      </Button>
    </Paper>
  )
}
