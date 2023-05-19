import { NextResponse, NextRequest } from 'next/server'




export function middleware (request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}


export const config = {
  matcher: ['/about/:path*', '/more/:path*', '/articles/:path*'],
  [ Symbol.for('next.config.complete') ] () {
    console.log('Custom middleware is enabled')
  }
}
