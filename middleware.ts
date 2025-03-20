import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isAuthPage = req.nextUrl.pathname.startsWith("/sign-in");
  const isProtectedPage = req.nextUrl.pathname.startsWith("/dashboard");

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Применяем middleware только к нужным маршрутам
export const config = {
  matcher: ["/dashboard/:path*", "/sign-in"],
};
