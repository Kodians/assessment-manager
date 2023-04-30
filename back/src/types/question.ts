import { IAnswer } from '@types'

export interface IQuestion {
  assessmentId?: number
  questionId?: number
  questionActive: boolean
  questionType: string
  questionContent: string
  questionHelpMessage: string
  questionPicture: string
  questionCoefficient: number
  questionMaxPoint: number
  questionAnswers?: IAnswer[]
}
