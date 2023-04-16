import { getDatabase } from '@helpers'
import { IModule, ResponseType } from '@types'

import { QueryResult } from 'pg'

/**
 * @description create a new module
 * @param {object} moduleData
 * @returns Promise<object>
 */
export const createModule = async (moduleData: IModule): Promise<ResponseType<IModule>> => {
  const db = getDatabase()
  const { moduleName, moduleDescription, moduleCreatedBy } = moduleData

  let response: ResponseType<IModule> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.module(module_name, module_description, module_createdby) VALUES($1, $2, $3) RETURNING *',
      values: [moduleName, moduleDescription, moduleCreatedBy],
    }

    const result: QueryResult<IModule> = await db.query(query)
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
