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
  const { moduleName, moduleDescription, moduleCreatedBy, moduleClasses } = moduleData

  let response: ResponseType<IModule> = {
    success: false,
  }
  try {
    await db.query('BEGIN')

    const query = {
      text: 'INSERT INTO assessment_db.module(module_name, module_description, module_createdby) VALUES($1, $2, $3) RETURNING *',
      values: [moduleName, moduleDescription, moduleCreatedBy],
    }

    const {
      rows: [{ module_id: moduleId }],
    } = await db.query(query)
    if (moduleClasses) {
      for (const classId of moduleClasses) {
        await db.query('INSERT INTO assessment_db.class_module(class_id, module_id) VALUES ($1, $2)', [
          classId,
          moduleId,
        ])
      }
    }
    await db.query('COMMIT')

    const resultModule: QueryResult<IModule> = await db.query(query)
    response = {
      success: true,
      data: resultModule.rows[0],
    }
  } catch (error: Error | any) {
    await db.query('ROLLBACK')
    throw new Error(error.message)
  } finally {
    await db.end()
  }
  return response
}
