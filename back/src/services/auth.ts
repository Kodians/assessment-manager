import { IUser } from '@types'

import { HttpStatusCode } from '../enums/HttpStatusCode'
import APIError from '../errors/APIError'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jsonwebtoken from 'jsonwebtoken'
import * as path from 'path'

// dotenv.config({ path: './.env' })
dotenv.config({ path: path.join(__dirname, '/../../../.env') })

const RSA_KEY_PRIVATE: string | undefined = process.env.RSA_KEY_PRIVATE

export const gethashCode = (value: any): string => {
  try {
    return bcrypt.hashSync(value, bcrypt.genSaltSync(8))
  } catch (error) {
    throw new APIError(
      'INTERNAL SERVER',
      HttpStatusCode.INTERNAL_SERVER,
      `Erreur lors du cryptage du mot de passe`,
      true,
    )
  }
}

export const isSamePassword = (passwordBody: string, userPassword: string): boolean => {
  try {
    return bcrypt.compareSync(passwordBody, userPassword)
  } catch (error) {
    throw new APIError(
      'INTERNAL SERVER',
      HttpStatusCode.INTERNAL_SERVER,
      `Erreur de la comparaison des mots de passe`,
      true,
    )
  }
}

export const getToken = (user: any): string => {
  if (!RSA_KEY_PRIVATE) {
    throw new APIError('INTERNAL SERVER', HttpStatusCode.INTERNAL_SERVER, `La key private n'existe pas`, true)
  } else {
    return jsonwebtoken.sign(
      {
        userId: user.data.user_id,
        role: user.data.user_role,
        login: user.data.user_login,
      },
      RSA_KEY_PRIVATE.replace('/\\n/g', '\n'),
      {
        subject: user.data.user_id?.toString(),
        expiresIn: '24h',
      },
    )
  }
}
