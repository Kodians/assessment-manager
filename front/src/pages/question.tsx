import React from 'react'

import { QuestionCard } from '@components'
import { AssessmentRelatedClassAndModuleContainter, SharedModal } from '@components'
import { getSize } from '@helpers'
import { useMutation } from '@hooks'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { ImCancelCircle } from 'react-icons/im'

type TypeQuestion = Array<{
  id: number
  type: string
  question: string
  responses?: Array<{ id: number; text: string }>
}>

export const Question = () => {
  const [questions, setQuestions] = React.useState<TypeQuestion>([
    {
      id: 1,
      type: 'Question choix multiple',
      question: '',
      responses: [
        { id: 1, text: '' },
        { id: 2, text: '' },
      ],
    },
    {
      id: 2,
      type: 'Question ouverte',
      question: '',
    },
    {
      id: 3,
      type: 'Question choix multiple',
      question: '',
      responses: [
        { id: 1, text: '' },
        { id: 2, text: '' },
      ],
    },
  ])

  const [assessmentName, setAssessmentName] = React.useState<string>('')

  const { mutate } = useMutation('http://localhost:3000/api/assessments', {
    method: 'POST',
  })

  const gridRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)

  const handleAssessmentName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssessmentName(event.target.value)
  }

  const handleOpenShareModal = () => {
    setOpen(true)
  }

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: 'Question choix multiple',
      question: '',
      responses: [
        { id: 1, text: '' },
        { id: 2, text: '' },
      ],
    }
    setQuestions([...questions, newQuestion])
  }

  const deleteQuestion = (question: any) => {
    setQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.filter((prevQuestion: any) => prevQuestion.id !== question.id)
      return newQuestions
    })
  }

  const saveQuestions = () => {
    mutate({
      name: assessmentName,
      questions,
    })
  }

  return (
    <>
      <Paper sx={{ p: 3, '& > div': { marginBottom: 5 }, border: '1px solid #e0e0e0' }} elevation={0}>
        <Button
          type="button"
          variant="contained"
          fullWidth
          sx={{ maxWidth: 100, padding: 0 }}
          onClick={handleOpenShareModal}
        >
          Partager
        </Button>
        <Grid container spacing={3} mt={3}>
          <Grid item sx={{ marginTop: 2 }}>
            <Typography>Nom interrogation:</Typography>
          </Grid>
          <Grid item>
            <TextField
              placeholder="Saisissez le nom de l'interrogation"
              sx={{ width: 300 }}
              value={assessmentName}
              onChange={handleAssessmentName}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          {questions.map((question) => (
            <QuestionCard
              questionNumber={question.id}
              question={question}
              setQuestions={setQuestions}
              deleteQuestion={deleteQuestion}
              key={question.id}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{ '& > button': { marginLeft: 2 } }}>
          <Button type="button" variant="contained" size="medium" onClick={addQuestion}>
            Ajouter une question
          </Button>
          <Button type="button" variant="contained" size="medium" onClick={saveQuestions}>
            Valider
          </Button>
        </Box>
      </Paper>
      <div ref={gridRef}>
        {open && (
          <SharedModal open={open} closeModal={() => setOpen(false)} size={getSize(gridRef)}>
            <Grid container>
              <Grid container item justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '1rem' }}>
                <Grid item>
                  <Typography variant="h6">Partager</Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => setOpen(false)}>
                    <ImCancelCircle />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <AssessmentRelatedClassAndModuleContainter />
              </Grid>
            </Grid>
          </SharedModal>
        )}
      </div>
    </>
  )
}
