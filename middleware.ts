import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup", "/"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = request.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	// 5. Redirect to /login if the user is not authenticated
	if (isProtectedRoute) {
		return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
	}

	return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
