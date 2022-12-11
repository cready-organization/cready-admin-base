import { JWT_SECRET_KEY } from '@/ultils/constant/security'
import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const encrypt = (value: string) => {
  const encryptPassword = bcrypt.hashSync(value, 16)
  return encryptPassword
}

export const comparePassword = (reqValue: string, realValue: string) => {
  const isMatch = bcrypt.compareSync(reqValue, realValue)
  return isMatch
}

export const generateAccessToken = (user: { username: string; role: Role }) => {
  return jwt.sign({ username: user.username, role: user.role }, JWT_SECRET_KEY)
}
