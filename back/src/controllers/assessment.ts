import { Request, Response } from 'express'

import { createAssessment } from '@models'
import { IAssessment, ResponseType } from '@types'

export const addAssessment = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }

  try {
    const moduleData = <IAssessment>req.body
    const queryResult = await createAssessment(moduleData)
    response = { ...response, success: queryResult.success, data: queryResult.data }
    res.status(201).json(response)
  } catch (error: any) {
    console.error(error)
    response = { ...response, success: false, error }
    res.status(400).json(response)
  }
}
