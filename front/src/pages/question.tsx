import React from 'react'

import { QuestionCard } from '@components'
import { AssessmentRelatedClassAndModuleContainter, SharedModal } from '@components'
import { getSize } from '@helpers'
// import { useMutation } from '@hooks'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { ImCancelCircle } from 'react-icons/im'

type TypeQuestion = Array<{
  id: number
  type: string
  question: string
  responses?: Array<{ id: number; text: string }>
}>

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number | string
}

enum QuestionTypesEnum {
  multiple = 'Question choix multiple',
  ouverte = 'Question ouverte',
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const Question = ({ appRef }: any) => {
  const [tabValue, setTabValue] = React.useState<number | string>(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number | string) => {
    setTabValue(newValue)
  }
  const [questions, setQuestions] = React.useState<TypeQuestion>([
    {
      id: 1,
      type: QuestionTypesEnum.multiple,
      question: '',
      responses: [
        { id: 1, text: '' },
        { id: 2, text: '' },
      ],
    },
  ])

  // const [assessments, setAssessments] = React.useState<any>()

  const [assessmentName, setAssessmentName] = React.useState<string>('')

  // const { mutate } = useMutation('http://localhost:3000/api/assessments', {
  //   method: 'POST',
  // })

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
      type: QuestionTypesEnum.ouverte,
      question: '',
    }
    setQuestions([...questions, newQuestion])
  }

  const deleteQuestion = (question: any) => {
    setQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.filter((prevQuestion: any) => prevQuestion.id !== question.id)
      return newQuestions
    })
  }

  /*const addAssessment = () => {
    const newAssessment = {
      id: assessments.length + 1,
      name: assessmentName,
      questions,
    }
    setAssessments([...assessments, newAssessment])
  }

  const removeAssessment = (assessment: any) => {
    setAssessments((prevAssessments: any) => {
      const newAssessments = prevAssessments.filter((prevAssessment: any) => prevAssessment.id !== assessment.id)
      return newAssessments
    })
  }*/

  const saveQuestions = () => {
    console.log({
      name: assessmentName,
      questions,
    })
    // mutate({
    //   name: assessmentName,
    //   questions,
    // })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Intérrogations" {...a11yProps(0)} />
          <Tab label="Créer une intérrogation" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <List>
          <ListItem divider sx={{ backgroundColor: '#efefef', display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary="Nom interrogation" sx={{ fontweight: 'bold', fontSize: 16 }} />
            <ListItemText primary="Nombre de questions" sx={{ fontweight: 'bold', fontSize: 16 }} />
            <ListItemText
              primary="Actions"
              sx={{ fontweight: 'bold', fontSize: 16, display: 'flex', justifyContent: 'flex-end' }}
            />
          </ListItem>
          {[
            { id: 1, name: 'Interrogation 1', questions: [{ id: 1, question: 'Question 1' }] },
            { id: 2, name: 'Interrogation 2', questions: [{ id: 1, question: 'Question 1' }] },
          ].map((assessment: any) => (
            <ListItem key={assessment.id} divider sx={{ display: 'flex', justifyContent: 'center' }}>
              <ListItemText primary={assessment.name} />
              <ListItemText primary={assessment.questions.length} />
              <ListItemText sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton edge="end" aria-label="delete">
                  <ImCancelCircle />
                </IconButton>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Paper sx={{ p: 0.5, '& > div': { marginBottom: 5 }, border: '1px solid #e0e0e0' }} elevation={0}>
          <Button
            type="button"
            variant="contained"
            fullWidth
            sx={{ maxWidth: 100, padding: 0, mt: 1 }}
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
                QuestionTypesEnum={QuestionTypesEnum}
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
        <div>
          {open && (
            <SharedModal open={open} closeModal={() => setOpen(false)} size={getSize(appRef)}>
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
      </TabPanel>
    </Box>
  )
}
