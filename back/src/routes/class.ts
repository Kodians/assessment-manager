import express from 'express'

import { addClass, getClasses } from '@controllers'

const router = express.Router()

router.post('/', addClass)
router.get('/', getClasses)

export { router as classRouter }
