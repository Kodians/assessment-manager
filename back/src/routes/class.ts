import express, { Request, Response } from 'express'

import { addClass } from '@controllers'
import { IClass, ResponseType } from '@types'

import { MongooseError } from 'mongoose'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  let response: ResponseType = {
    success: true,
  }

  try {
    response = await addClass(<IClass>req.body)
  } catch (error: unknown) {
    response = { ...response, success: false, error: (error as MongooseError).message }
  }

  res.send(response)
})

export { router as classRouter }
