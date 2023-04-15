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

export const QuestionCard = ({ questionNumber, deleteQuestion }: any) => {
  const [questionType, setQuestionType] = useState('multiple')

  const handleChangeQuestionType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionType((event.target as HTMLInputElement).value)
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
                  <FormControlLabel value="multiple" control={<Radio />} label="Question choix multiple" />
                  <FormControlLabel value="ouverte" control={<Radio />} label="Question ouverte" />
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
              onClick={deleteQuestion}
            >
              Supprimer
            </Button>
          </Box>
        </CardContent>

        {questionType === 'multiple' ? (
          <CardContent>
            <MultipleChoixQuestion></MultipleChoixQuestion>
          </CardContent>
        ) : (
          <CardContent>
            <OpenQuestion></OpenQuestion>
          </CardContent>
        )}
      </Card>
    </>
  )
}

// QuestionCard.propTypes = {
//     questionNumber: PropTypes.number
// }
