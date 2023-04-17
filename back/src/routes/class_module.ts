import express from 'express'

import { addClassModule } from '@controllers'

const router = express.Router()

router.post('/', addClassModule)

export { router as classModuleRouter }
