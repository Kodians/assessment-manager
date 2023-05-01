import { IQuestion } from '@types'

export interface IAssessment {
  assessmentId?: number
  assessmentName: string
  assessmentDescription: string
  assessmentCreatedBy: Date
  assessmentCreatedDate: Date
  assessmentModifiedDate: Date
  assessmentQuestions?: IQuestion[]
}
