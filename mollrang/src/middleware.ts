import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {v4 as uuid} from "uuid";

export function middleware(request: NextRequest) {
  const {cookies} = request;
  const hasUserCookie = cookies.has('user');
  const response = NextResponse.next();

  if (request.nextUrl.pathname !== '/' && !hasUserCookie) {
    const userId = uuid() as string;
    response.cookies.set('user', userId);
  }

  // if (!hasUserCookie && request.nextUrl.pathname !== '/') {
  //   return NextResponse.redirect(new URL('/', request.nextUrl.origin));
  // }
  return response;
}

export const config = {
  matcher: ['/quizzes/:path*', '/']
}
