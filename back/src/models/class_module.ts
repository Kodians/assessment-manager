import { getDatabase } from '@helpers'
import { IClassModule, ResponseType } from '@types'

import { QueryResult } from 'pg'

/**
 * @description create association between a class and a module
 * @param {object} classModuleData
 * @returns Promise<object>
 */
export const createClassModule = async (classModuleData: IClassModule): Promise<ResponseType<IClassModule>> => {
  const db = getDatabase()
  const { classId, moduleId } = classModuleData

  let response: ResponseType<IClassModule> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.class_module(class_id, module_id) VALUES($1, $2) RETURNING *',
      values: [classId, moduleId],
    }

    const result: QueryResult<IClassModule> = await db.query(query)
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
