import {NextResponse} from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";
import { getToken } from "next-auth/jwt";

const {auth: authMiddleware} = NextAuth(authConfig)


// @ts-ignore
export default authMiddleware(async (request) => {
    const {nextUrl, auth} = request;
    const isLoggedIn = !!auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (nextUrl.pathname === '/' || nextUrl.pathname === '/site') {
        return NextResponse.rewrite(new URL('/site', nextUrl))
    }

    if (isApiAuthRoute) return null

    if (isAuthRoute) {
        if (isLoggedIn) {
            // @ts-ignore
            const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });

            if (token?.role === 'USER' && !nextUrl.pathname.startsWith('/user')) {
                return Response.redirect(new URL('/user', nextUrl));
            }

            if (token?.role === 'SUBACCOUNT' && !nextUrl.pathname.startsWith('/sub-account')) {
                return Response.redirect(new URL('/sub-account', nextUrl));
            }
        }
        return null
    }


    if (!isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/login', nextUrl))
    }

    if (isLoggedIn) {
        // @ts-ignore
        const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });

        if (token?.role === 'USER' && !nextUrl.pathname.startsWith('/user')) {
            return Response.redirect(new URL('/user', nextUrl));
        }

        if (token?.role === 'SUBACCOUNT' && !nextUrl.pathname.startsWith('/sub-account')) {
            return Response.redirect(new URL('/sub-account', nextUrl));
        }
    }

    return null
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}