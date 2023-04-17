import express, { Request, Response } from 'express'

import { getDatabase } from '@helpers'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  const database = getDatabase()
  database.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error(err)

      return res.send({ success: false })
    } else {
      const { rows } = result
      console.log(`It's ${rows[0].now}`)
    }
  })
  res.send({ success: true })
})

export { router as indexRouter }
// export * from './authentication'
export * from './user'
export * from './class'
export * from './module'
export * from './class_module'
export * from './assessment'
