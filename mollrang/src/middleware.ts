import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export function middleware(request: NextRequest) {
  const { cookies } = request;
  const hasUserCookie = cookies.has("user");
  const response = NextResponse.next();

  if (request.nextUrl.pathname !== "/" && !hasUserCookie) {
    const userId = uuid() as string;
    response.cookies.set("user", userId);
  }
  return response;
}

export const config = {
  matcher: ["/quizzes/:path*", "/"],
};
