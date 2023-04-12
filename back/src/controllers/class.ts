import { Request, Response } from 'express'

import { createClass } from '@models'
import { IClass, ResponseType } from '@types'

export const addClass = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }

  try {
    const classData = <IClass>req.body
    const queryResult = await createClass(classData)
    response = { ...response, data: queryResult }
    res.status(201).json(response)
  } catch (error: unknown) {
    response = { ...response, success: false }
    res.status(400).json(response)
  }
}
