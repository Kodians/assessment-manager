import { getDatabase } from '@helpers'

/**
 * @description class a new class
 * @param {object} classData
 * @returns Promise<object>
 */
export const createClass = async (classData: unknown): Promise<unknown | void> => {}

/**
 * @description find all classes
 * @returns Promise<object>
 */
export const findClasses = async (): Promise<unknown | void> => {}

/**
 * @description find class by id
 * @param {number} classId
 * @returns Promise<object>
 */
export const findClassById = async (classId: number): Promise<unknown | void> => {}

/**
 * @description update a class
 * @param {number} classId
 * @param {object} classData
 * @returns Promise<object>
 */
export const updateClass = async (classId: number, classData: unknown): Promise<unknown | void> => {}

/**
 * @description delete a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const removeClass = async (classId: number): Promise<unknown | void> => {}

/* -------------------------------------------------------------------------- */
/*                                 RELATIONSHIP BETWEEN CLASS AND STUDENT                                   */
/* -------------------------------------------------------------------------- */

/**
 * @description create a new student in a class
 * @param {number} classId
 * @param {object} studentData
 * @returns Promise<object>
 */
export const createStudentInClass = async (classId: number, studentData: unknown): Promise<unknown | void> => {}

/**
 * @description find all students in a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const findStudentsByClassId = async (classId: number): Promise<unknown | void> => {}

/* -------------------------------------------------------------------------- */
/*                                 RELATIONSHIP BETWEEN CLASS AND MODULE                                   */
/* -------------------------------------------------------------------------- */

/**
 * @description create a new module in a class
 * @param {number} classId
 * @param {object} moduleData
 * @returns Promise<object>
 */
export const createModuleInClass = async (classId: number, moduleData: unknown): Promise<unknown | void> => {}

/**
 * @description find all modules in a class
 * @param {number} classId
 * @returns Promise<object>
 */
export const findModulesByClassId = async (classId: number): Promise<unknown | void> => {}
