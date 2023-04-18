import express from 'express'

import { HttpStatusCode } from '@enums'
import APIError from '@errors'

import jsonwebtoken from 'jsonwebtoken'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isLoggedInMiddleware = (request: Request, response: Response, next: any) => {
  const token: string | undefined = request.headers.authorization

  if (!token) {
    console.error(`Pas de token !`)

    return response.status(HttpStatusCode.UNAUTHORISED).json({
      error: ` Vous n'êtes pas autorisez à accéder à cette resource !`,
    })
  }

  const RSA_KEY_PRIVATE: string | undefined = process.env.RSA_KEY_PRIVATE

  if (!RSA_KEY_PRIVATE) {
    throw new APIError('INTERNAL SERVER', HttpStatusCode.INTERNAL_SERVER, `La key public n'existe pas`, true)
  }

  jsonwebtoken.verify(token, RSA_KEY_PRIVATE.replace('/\\n/g', '\n'), (error) => {
    if (error) {
      console.error('Token invalid')

      return response.status(HttpStatusCode.UNAUTHORISED).json({
        error: 'Token invalid',
      })
    }

    next()
  })
}
