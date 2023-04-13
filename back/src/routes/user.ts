import express from 'express'

import { addUser } from '@controllers'

const router = express.Router()

router.post('/', addUser)

export { router as userRouter }
