import { Request, Response } from 'express'

import { createUser, getUser } from '@models'
import { IUser, ResponseType } from '@types'

import { HttpStatusCode } from '../enums/HttpStatusCode'
import APIError from '../errors/APIError'
import { getToken, isSamePassword } from '../services/auth'

export const addUser = async (req: Request, res: Response): Promise<void> => {
  let response: ResponseType = {
    success: false,
  }

  try {
    const userData = <IUser>req.body
    const queryResult = await createUser(userData)
    response = { ...response, success: queryResult.success, data: queryResult.data }
    res.status(201).json(response)
  } catch (error: any) {
    console.error(error)
    response = { ...response, success: false, error }
    res.status(400).json(response)
  }
}

// export const getUserById = async (req: Request, res: Response): Promise<void> => {
//   let response: ResponseType = {
//     success: false,
//   }

//   try {
//     const userId = <number>req.body.userId
//     const queryResult = await getUser(userId)
//     response = { ...response, success: queryResult.success, data: queryResult.data }
//     res.status(201).json(response)
//   } catch (error: any) {
//     console.error(error)
//     response = { ...response, success: false, error }
//     res.status(400).json(response)
//   }
// }

export const signinUser = async (request: Request, response: Response): Promise<any> => {
  const userBody: any = request.body

  getUser(userBody.login)
    .then(async (user: any) => {
      if (user === null) {
        console.error(`L'utilisateur n'existe pas`)

        return response.status(HttpStatusCode.UNAUTHORISED).json({
          errors: `Votre nom d'utilisateur est incorrect`,
        })
      }

      if (!isSamePassword(userBody.password, user.data.user_password)) {
        console.error(`Mot de passe incorrect`)

        return response.status(HttpStatusCode.UNAUTHORISED).json({
          errors: `Votre mot de passe est incorrect`,
        })
      }

      const token: string = getToken(user)
      console.info(`L'authentification à été un success`)

      return response.status(HttpStatusCode.OK).json({ token, role: user.data.user_role })
    })
    .catch((errors: any) => {
      response.status(HttpStatusCode.UNAUTHORISED).json({
        msg: 'Authentification échouée',
      })

      throw new APIError(
        'INTERNAL SERVER',
        HttpStatusCode.INTERNAL_SERVER,
        `Une erreur s'est produit lors l'authentification ==> ${errors}`,
        true,
      )
    })
}
