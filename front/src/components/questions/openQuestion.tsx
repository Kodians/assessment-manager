import React from 'react'

import { TextField } from '@mui/material'

export const OpenQuestion = ({ question, setAssessmentQuestions }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setAssessmentQuestions((prevQuestions: any) => {
      const newQuestions = prevQuestions.map((prevQuestion: any) => {
        if (prevQuestion.id === question.id) {
          return { ...prevQuestion, question: value }
        }
        return prevQuestion
      })
      return newQuestions
    })
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
        value={question.question}
        onChange={handleChange}
      />
    </div>
  )
}
