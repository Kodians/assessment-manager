import { getDatabase } from '@helpers'
import { IAssessment, ResponseType } from '@types'

import { QueryResult } from 'pg'

/**
 * @description create a new assessment
 * @param {object} assessmentData
 * @returns Promise<object>
 */
export const createAssessment = async (assessmentData: IAssessment): Promise<ResponseType<IAssessment>> => {
  const db = getDatabase()
  const { assessmentName, assessmentDescription, assessmentCreatedBy } = assessmentData

  let response: ResponseType<IAssessment> = {
    success: false,
  }
  try {
    const query = {
      text: 'INSERT INTO assessment_db.assessment(assessment_name, assessment_description, assessment_createdby) VALUES($1, $2, $3) RETURNING *',
      values: [assessmentName, assessmentDescription, assessmentCreatedBy],
    }

    const result: QueryResult<IAssessment> = await db.query(query)
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
