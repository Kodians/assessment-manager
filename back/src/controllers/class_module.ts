import { Request, Response } from 'express'

import { createClassModule } from '@models'
import { IClassModule, ResponseType } from '@types'

export const addClassModule = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }

  try {
    const moduleData = <IClassModule>req.body
    const queryResult = await createClassModule(moduleData)
    response = { ...response, success: queryResult.success, data: queryResult.data }
    res.status(201).json(response)
  } catch (error: any) {
    console.error(error)
    response = { ...response, success: false, error }
    res.status(400).json(response)
  }
}
