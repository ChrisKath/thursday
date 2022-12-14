import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { configs } from '@/constants'

export const config = {
  matcher: ['/auth', '/todos/:path*']
}

export function middleware({ url, cookies }: NextRequest) {
  const token = cookies.get(configs.APP_AUTH_ACCESS)

  if (url.match('/auth') && token) {
    return NextResponse.redirect(new URL('/todos', url))
  } else if (url.match('/todos') && !token) {
    return NextResponse.redirect(new URL('/auth', url))
  }

  return NextResponse.next()
}
