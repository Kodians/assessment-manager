import { getDatabase } from '@helpers'
import { IUser, ResponseType } from '@types'

import bcrypt from 'bcrypt'
import { QueryResult } from 'pg'

/**
 * @description create a new user
 * @param {object} userData
 * @returns Promise<object>
 */
export const createUser = async (userData: IUser): Promise<ResponseType<IUser>> => {
  const db = getDatabase()
  const { login, password, firstname, lastname, classId, role } = userData
  const hashPassword = bcrypt.hashSync(password, 10)

  let response: ResponseType<IUser> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.user(user_login, user_password, user_firstname, user_lastname, class_id, user_role ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      values: [login, hashPassword, firstname, lastname, classId, role],
    }

    const result: QueryResult<IUser> = await db.query(query)
    response = {
      success: true,
      data: result.rows[0],
    }
  } catch (error: Error | any) {
    throw new Error(error.message)
  } finally {
    await db.end()
  }

  return response
}

/**
 * @description get a user
 * @param {number} userId
 * @returns Promise<object>
 */
export const getUser = async (login: string): Promise<ResponseType<IUser>> => {
  const db = getDatabase()

  let response: ResponseType<IUser> = {
    success: false,
  }

  try {
    const query = {
      text: 'SELECT * FROM assessment_db.user WHERE user_login = $1',
      values: [login],
    }

    const result: QueryResult<IUser> = await db.query(query)
    response = {
      success: true,
      data: result.rows[0],
    }
  } catch (error: Error | any) {
    throw new Error(error.message)
  } finally {
    await db.end()
  }

  return response
}
