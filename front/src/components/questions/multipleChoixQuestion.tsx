import React from 'react'

import { Button, Grid, Paper, TextField, Typography } from '@mui/material'

import { AiOutlineMinus } from 'react-icons/ai'

export const MultipleChoixQuestion = ({ question, setAssessmentQuestions }: any) => {
  // Ajouter une réponse
  const addMoreAnswers = () => {
    setAssessmentQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.map((prevQuestion: any) => {
        if (prevQuestion.id === question.id) {
          return {
            ...prevQuestion,
            questionAnswers: [
              ...prevQuestion.questionAnswers,
              { id: prevQuestion.questionAnswers.length + 1, text: '' },
            ],
          }
        }
        return prevQuestion
      })
      return newQuestions
    })
  }

  // Supprimer une réponse
  const removeAnswer = (id: number) => {
    setAssessmentQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.map((prevQuestion: any) => {
        if (prevQuestion.id === question.id) {
          const { questionAnswers } = prevQuestion
          const index = questionAnswers.findIndex((response: any) => response.id === id)
          if (index === -1 || questionAnswers.length === 1) {
            return prevQuestion
          }
          return {
            ...prevQuestion,
            questionAnswers: [...questionAnswers.slice(0, index), ...questionAnswers.slice(index + 1)],
          }
        }
        return prevQuestion
      })
      return newQuestions
    })
  }

  // Modifier une question ou une réponse
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target

    // changer la question
    setAssessmentQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.map((prevQuestion: any) => {
        if (prevQuestion.id === question.id) {
          const { question } = prevQuestion
          if (question === id) {
            return { ...prevQuestion, question: value }
          }
        }
        return prevQuestion
      })
      return newQuestions
    })

    // Modifier une réponse
    setAssessmentQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.map((prevQuestion: any) => {
        if (prevQuestion.id === question.id) {
          const { questionAnswers } = prevQuestion
          const newquestionAnswers = questionAnswers.map((response: any) => {
            if (response.id === Number(id)) {
              return { ...response, text: value }
            }
            return response
          })
          return { ...prevQuestion, questionAnswers: newquestionAnswers }
        }
        return prevQuestion
      })
      return newQuestions
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
            <TextField placeholder="Saisissez la question" id={question.question} onChange={handleChange} />
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          <Typography sx={{ width: 80 }}>Choix : </Typography>
        </Grid>
        <Grid item>
          {question?.questionAnswers?.map((response: any) => (
            <div key={response.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
              <TextField
                placeholder="Saisissez une réponse"
                value={response.text}
                id={response.id.toString()}
                onChange={handleChange}
              />
              {question?.questionAnswers.length > 1 && (
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
