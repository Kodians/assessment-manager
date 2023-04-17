import express from 'express'

import { addAssessment } from '@controllers'

const router = express.Router()

router.post('/', addAssessment)

export { router as assessmentRouter }
