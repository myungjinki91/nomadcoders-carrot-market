import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request);
}

export const Config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
