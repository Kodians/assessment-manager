import React from 'react'

import { QuestionCard } from '@components'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// import { AiOutlineMinus } from 'react-icons/ai'

export const Question = () => {
  const [questions, setQuestions] = React.useState([{ number: 1, type: 'multiple' }])

  const addQuestion = () => {
    const newQuestion = { number: questions.length + 1, type: 'multiple' }
    setQuestions([...questions, newQuestion])
  }

  // const deleteQuestion = (question: any) => {
  //   const tab = questions.filter(q => q.number !== question.number);
  //   setQuestions(tab);
  // }

  return (
    <Paper sx={{ p: 3, '& > div': { marginBottom: 5 }, border: '1px solid #e0e0e0' }} elevation={0}>
      <Button type="button" variant="contained" fullWidth sx={{ maxWidth: 100, padding: 0 }}>
        Partager
      </Button>
      <Grid container spacing={3} mt={3}>
        <Grid item sx={{ marginTop: 2 }}>
          <Typography>Nom interrogation:</Typography>
        </Grid>
        <Grid item>
          <TextField placeholder="Saisissez le nom de l'interrogation" sx={{ width: 300 }} />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end">
        <Button type="button" variant="contained" fullWidth sx={{ maxWidth: 200, padding: 0 }} onClick={addQuestion}>
          Ajouter une question
        </Button>
      </Box>
      <Box mt={3}>
        {questions.map((question) => (
          <QuestionCard questionNumber={question.number} key={question.number}></QuestionCard>
        ))}
      </Box>
    </Paper>
  )
}
