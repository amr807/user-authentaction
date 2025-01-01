import { NextResponse, NextRequest } from 'next/server'
// import { getServerSession } from 'next-auth/next';

export function middleware(request: NextRequest) {
  const isAuthenticated =false
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login',"http://localhost:3000"))
}
 
export const config = {
  matcher: '/profile/:path*',
}