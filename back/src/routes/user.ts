import express from 'express'

import { addUser, signinUser } from '@controllers'

const router = express.Router()

router.post('/', addUser)
router.post('/login', signinUser)

export { router as userRouter }
