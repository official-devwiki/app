import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export function middleware(request: NextRequest) {
  const {cookies} = request;
  const hasUserCookie = cookies.has('user');
  if (!hasUserCookie && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.nextUrl.origin));
  }
  return NextResponse.next();
}
