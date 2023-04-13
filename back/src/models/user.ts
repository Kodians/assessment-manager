import { getDatabase } from '@helpers'
import { IUser, ResponseType } from '@types'

import { QueryResult } from 'pg'

/**
 * @description create a new user
 * @param {object} userData
 * @returns Promise<object>
 */
export const createUser = async (userData: IUser): Promise<ResponseType<IUser>> => {
  const db = getDatabase()
  const { login, password, firstname, lastname, classId, role } = userData

  let response: ResponseType<IUser> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.user(user_login, user_password, user_firstname, user_lastname, class_id, user_role ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      values: [login, password, firstname, lastname, classId, role],
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
