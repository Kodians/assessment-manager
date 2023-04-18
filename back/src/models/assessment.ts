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
  const { assessmentName, assessmentDescription, assessmentCreatedBy, assessmentQuestions } = assessmentData
  let response: ResponseType<IAssessment> = {
    success: false,
  }
  try {
    await db.query('BEGIN')
    const query = {
      text: 'INSERT INTO assessment_db.assessment(assessment_name, assessment_description, assessment_createdby) VALUES($1, $2, $3) RETURNING *',
      values: [assessmentName, assessmentDescription, assessmentCreatedBy],
    }
    // Récupérer le résultats de la création d'une intero.
    const {
      rows: [
        {
          assessment_id: assessmentId,
          assessment_createddate: assessmentCreatedDate,
          assessment_modifieddate: assessmentModifiedDate,
        },
      ],
    } = await db.query(query)

    // Insérer l'ensemble des questions/réponses s'il y en a.
    if (assessmentQuestions) {
      for (const question of assessmentQuestions) {
        const {
          rows: [{ assessment_question_id: questionId }],
        } = await db.query(
          'INSERT INTO assessment_db.assessment_question(assessment_id, assessment_question_active, assessment_question_type, assessment_question_content, assessment_question_helpmessage, assessment_question_picture, assessment_question_coefficient, assessment_question_maxpoint) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
          [
            assessmentId,
            question.questionActive,
            question.questionType,
            question.questionContent,
            question.questionHelpMessage,
            question.questionPicture,
            question.questionCoefficient,
            question.questionMaxPoint,
          ],
        )
        console.log('QuestionId créé: ' + questionId)
        if (question.questionAnswers) {
          for (const answer of question.questionAnswers) {
            await db.query(
              'INSERT INTO assessment_db.assessment_answer(assessment_question_id, assessment_answer_active, assessment_answer_content, assessment_answer_picture, assessment_answer_correct) VALUES ($1, $2, $3, $4, $5) RETURNING *',
              [questionId, answer.answerActive, answer.answerContent, answer.answerPicture, answer.answerCorrect],
            )
          }
        }
      }
    }
    await db.query('COMMIT')

    response = {
      success: true,
      data: {
        assessmentId,
        assessmentName,
        assessmentDescription,
        assessmentCreatedBy,
        assessmentModifiedDate,
        assessmentCreatedDate,
      },
    }
  } catch (error: Error | any) {
    await db.query('ROLLBACK')
    throw new Error(error.message)
  } finally {
    await db.end()
  }
  return response
}
