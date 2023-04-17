import express from 'express'

import { addModule } from '@controllers'

const router = express.Router()

router.post('/', addModule)

export { router as moduleRouter }
