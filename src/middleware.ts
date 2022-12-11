import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/login', '/dashboard'],
}
export function middleware(req: NextRequest, res: NextApiResponse) {
  const accessToken = req.cookies.get('accessToken')
  try {
    const { pathname } = req.nextUrl
    console.log(pathname)
    if (pathname === '/login') {
      if (!accessToken) {
        console.log(`accessToken`, accessToken)

        return NextResponse.next()
      } else {
        return NextResponse.redirect('http://localhost:3000', 302)
      }
    }
    if (!accessToken) {
      return NextResponse.redirect('http://localhost:3000/login')
    }
    const response = NextResponse.next()

    return response
  } catch (error) {
    console.log(error)
  }
}
