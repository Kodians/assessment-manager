import express from 'express'

import { getCorsOptions } from '@helpers'
import { authenticationRouter, classRouter, indexRouter, userRouter } from '@routes'
import { Express } from '@types'

import { createClass } from './models/class'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import * as path from 'path'

dotenv.config({ path: path.join(__dirname, '/../../.env') })

const app: Express = express()

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per 5 minutes
})

// apply rate limiter to all requests
if (process.env.NODE_ENV !== 'test') {
  app.use(limiter)
}

app.use(cors(getCorsOptions()))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', indexRouter)
app.use('/api/authenticate', authenticationRouter)
app.use('/api/user', userRouter)
app.use('/api/class', classRouter)

createClass({
  class_name: 'M1MIAA',
  class_description: 'M1 Miage en apprentissage',
})

export default app
