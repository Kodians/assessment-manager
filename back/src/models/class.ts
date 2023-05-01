import { getDatabase } from '@helpers'
import { IClass, ResponseType } from '@types'

import { QueryResult } from 'pg'

/**
 * @description class a new class
 * @param {object} classData
 * @returns Promise<object>
 */
export const createClass = async (classData: IClass): Promise<ResponseType<IClass>> => {
  const db = getDatabase()
  const { className, classCode, classDescription } = classData

  let response: ResponseType<IClass> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.class(class_name, class_code, class_description) VALUES($1, $2, $3) RETURNING *',
      values: [className, classCode, classDescription],
    }

    const result: QueryResult<IClass> = await db.query(query)
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
 * @description find all classes
 * @returns Promise<object>
 */
export const findClasses = async (): Promise<any> => {
  let response: ResponseType<IClass[]> = {
    success: false,
  }

  try {
    const db = getDatabase()
    const result = await db.query('SELECT * FROM assessment_db.class')
    response = {
      success: true,
      data: result.rows,
    }
  } catch (error: Error | any) {
    response = {
      success: false,
      error,
    }
    throw new Error(error.message)
  }

  return response
}

/**
 * @description find class by id
 * @param {number} classId
 * @returns Promise<object>
 */
export const findClassById = async (classId: number): Promise<any> => {}

/**
 * @description update a class
 * @param {number} classId
 * @param {object} classData
 * @returns Promise<object>
 */
export const updateClass = async (classId: number, classData: unknown): Promise<any> => {}

/**
 * @description delete a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const removeClass = async (classId: number): Promise<any> => {}

/* -------------------------------------------------------------------------- */
/*                                 RELATIONSHIP BETWEEN CLASS AND STUDENT     */
/* -------------------------------------------------------------------------- */

/**
 * @description create a new student in a class
 * @param {number} classId
 * @param {object} studentData
 * @returns Promise<object>
 */
export const createStudentInClass = async (classId: number, studentData: unknown): Promise<any> => {}

/**
 * @description find all students in a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const findStudentsByClassId = async (classId: number): Promise<any> => {}

/* -------------------------------------------------------------------------- */
/*                                 RELATIONSHIP BETWEEN CLASS AND MODULE      */
/* -------------------------------------------------------------------------- */

/**
 * @description create a new module in a class
 * @param {number} classId
 * @param {object} moduleData
 * @returns Promise<object>
 */
export const createModuleInClass = async (classId: number, moduleData: unknown): Promise<any> => {}

/**
 * @description find all modules in a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const findModulesByClassId = async (classId: number): Promise<any> => {}
