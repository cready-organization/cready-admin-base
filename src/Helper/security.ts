import bcrypt from 'bcryptjs'

export const encrypt = (value: string) => {
  const encryptPassword = bcrypt.hashSync(value, 16)
  return encryptPassword
}

export const comparePassword = (reqValue: string, realValue: string) => {
  const isMatch = bcrypt.compareSync(reqValue, realValue)
  return isMatch
}
