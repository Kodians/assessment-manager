/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'

import { MultipleChoixQuestion, OpenQuestion } from '@components'
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'

enum QuestionType {
  multiple = 'Question choix multiple',
  ouverte = 'Question ouverte',
}

export const QuestionCard = ({ questionNumber, deleteQuestion, question, setQuestions }: any) => {
  const [questionType, setQuestionType] = useState<string>(QuestionType.ouverte)

  const handleChangeQuestionType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionType(event.target.value)
  }

  const removeQuestion = () => {
    deleteQuestion(question)
  }

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={4}>
            <Grid item mt={1}>
              <Typography>Question n° {questionNumber}</Typography>
            </Grid>

            <Grid item>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={questionType}
                  onChange={handleChangeQuestionType}
                  name="radio-buttons-group"
                >
                  <FormControlLabel value={QuestionType.multiple} control={<Radio />} label={QuestionType.multiple} />
                  <FormControlLabel value={QuestionType.ouverte} control={<Radio />} label={QuestionType.ouverte} />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end">
            <Button
              type="button"
              variant="contained"
              fullWidth
              sx={{ maxWidth: 100, padding: 0 }}
              onClick={removeQuestion}
            >
              Supprimer
            </Button>
          </Box>
        </CardContent>

        {questionType.includes(QuestionType.multiple) ? (
          <CardContent>
            <MultipleChoixQuestion question={question} setQuestions={setQuestions} />
          </CardContent>
        ) : (
          <CardContent>
            <OpenQuestion question={question} setQuestions={setQuestions} />
          </CardContent>
        )}
      </Card>
    </>
  )
}
