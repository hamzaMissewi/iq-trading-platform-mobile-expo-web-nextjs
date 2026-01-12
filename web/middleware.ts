import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Handle CORS for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const response = NextResponse.next();

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  }

  // Handle body size limit
  if (["POST", "PUT", "PATCH"].includes(request.method)) {
    const contentLength = request.headers.get("content-length");
    const maxSize = 4.5 * 1024 * 1024; // 4.5mb to match vercel limit

    if (contentLength && parseInt(contentLength) > maxSize) {
      return new NextResponse(
        JSON.stringify({ error: "Body size limit exceeded" }),
        {
          status: 413,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
