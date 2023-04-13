import { Request, Response } from 'express'

import { createUser } from '@models'
import { IUser, ResponseType } from '@types'

export const addUser = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }

  try {
    const userData = <IUser>req.body
    const queryResult = await createUser(userData)
    response = { ...response, success: queryResult.success, data: queryResult.data }
    res.status(201).json(response)
  } catch (error: any) {
    console.error(error)
    response = { ...response, success: false, error }
    res.status(400).json(response)
  }
}
