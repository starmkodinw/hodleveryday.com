import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  if (
    request.headers.get("User-Agent")?.includes("facebookexternalhit") &&
    request.headers.has("Range")
  ) {
    headers.delete("Range");
  }
  return NextResponse.next({
    request: { headers },
  });
}

export const config = {
  matcher: "/about/:path*",
};
