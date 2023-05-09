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

export const QuestionCard = ({
  questionNumber,
  deleteQuestion,
  question,
  setAssessmentQuestions,
  QuestionTypesEnum,
}: any) => {
  const [questionType, setQuestionType] = useState<string>(question.questionType)

  const handleChangeQuestionType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionType(event.target.value)
    setAssessmentQuestions((prevState: any) => {
      const newState = prevState.map((item: any) => {
        if (item.id === question.id) {
          item.type = event.target.value
        }
        return item
      })
      return newState
    })
  }

  const removeQuestion = () => {
    deleteQuestion(question)
  }

  return (
    <>
      <Card variant="outlined" sx={{ mb: 2 }}>
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
                  <FormControlLabel
                    value={QuestionTypesEnum.multiple}
                    control={<Radio />}
                    label={QuestionTypesEnum.multiple}
                  />
                  <FormControlLabel
                    value={QuestionTypesEnum.ouverte}
                    control={<Radio />}
                    label={QuestionTypesEnum.ouverte}
                  />
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

        {questionType.includes(QuestionTypesEnum.multiple) ? (
          <CardContent>
            <MultipleChoixQuestion question={question} setAssessmentQuestions={setAssessmentQuestions} />
          </CardContent>
        ) : (
          <CardContent>
            <OpenQuestion question={question} setAssessmentQuestions={setAssessmentQuestions} />
          </CardContent>
        )}
      </Card>
    </>
  )
}
