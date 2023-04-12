import { createClass } from '@models'
import { IClass } from '@types'

export const addClass = async (classData: IClass): Promise<any> => {
  return createClass(classData)
}
