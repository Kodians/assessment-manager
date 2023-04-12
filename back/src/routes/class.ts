import express from 'express'

import { addClass } from '@controllers'

const router = express.Router()

router.post('/', addClass)

export { router as classRouter }
