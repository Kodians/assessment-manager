import express from 'express'

import { getCorsOptions } from '@helpers'
import { assessmentRouter, classModuleRouter, classRouter, indexRouter, moduleRouter, userRouter } from '@routes'
import { Express } from '@types'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import * as path from 'path'

//import { findClasses } from './models/class'

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

// app.use('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//   next()
// })

app.use('/api', indexRouter)
// app.use('/api/authenticate', authenticationRouter)
app.use('/api/user', userRouter)
app.use('/api/classes', classRouter)
app.use('/api/modules', moduleRouter)
app.use('/api/assessments', assessmentRouter)

export default app
