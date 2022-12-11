import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const cookies = new Cookies(req, res)

  switch (method) {
    case 'POST':
      try {
        cookies.set('accessToken', '')
        res.redirect('/login')
      } catch (error) {
        console.log(error)
      }

      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
