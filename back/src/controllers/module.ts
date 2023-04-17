import { Request, Response } from 'express'

import { createModule } from '@models'
import { IModule, ResponseType } from '@types'

// Créer un module + les classes associées
export const addModule = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }
  try {
    const moduleData = <IModule>req.body
    const queryResult = await createModule(moduleData)
    response = { ...response, success: queryResult.success, data: queryResult.data }
    res.status(201).json(response)
  } catch (error: any) {
    console.error(error)
    response = { ...response, success: false, error }
    res.status(400).json(response)
  }
}
