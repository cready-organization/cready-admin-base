import { comparePassword, generateAccessToken } from '@/Helper/security'
import { PrismaClient } from '@prisma/client'
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { password },
    method,
  } = req
  const cookies = new Cookies(req, res)
  const prisma = new PrismaClient()
  const user = await prisma.user.findFirst()
  console.log(method)
  switch (method) {
    case 'POST':
      try {
        if (user) {
          const isAuthenticated = comparePassword(password, user.password)
          const accessToken = generateAccessToken({
            username: user.username,
            role: user.role,
          })
          if (isAuthenticated) {
            cookies.set('accessToken', accessToken)
            return res.redirect('/dashboard')
          } else {
            return res.status(400).json({ msg: 'fail' })
          }
        } else {
          return res.status(400).json({ msg: 'fail' })
        }
      } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'fail' })
      }

      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
