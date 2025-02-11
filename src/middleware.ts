import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if we need to redirect
  if (request.nextUrl.pathname.startsWith("/products/")) {
    // Make sure the URL stays as-is without any redirects
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/products/:path*",
};
