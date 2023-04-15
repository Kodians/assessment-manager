import React from 'react'

import Grid from '@mui/material/Grid'

import { AssessmentRelatedClassAndModule } from './AssessmentRelatedClassAndModule'
import { AssessmentRelatedClassAndModuleForm } from './AssessmentRelatedClassAndModuleForm'

export const AssessmentRelatedClassAndModuleContainter = () => {
  return (
    <Grid container justifyContent={'space-between'} wrap={'wrap-reverse'}>
      <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }} xs={12} sm={5}>
        <AssessmentRelatedClassAndModule />
      </Grid>
      <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }} xs={12} sm={5}>
        <AssessmentRelatedClassAndModuleForm />
      </Grid>
    </Grid>
  )
}
