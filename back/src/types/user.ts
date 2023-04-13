export interface IUser {
  userId?: number
  active: boolean
  login: string
  password: string
  firstname: string
  lastname: string
  createdDate: Date
  lastLogin: Date
  classId: number
  role: string
  token: string
  tokenExpiration: Date
}
