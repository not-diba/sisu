import {NextResponse} from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";
import {getToken} from "next-auth/jwt";

const {auth: authMiddleware} = NextAuth(authConfig)


// @ts-ignore
export default authMiddleware(async (request) => {
    const {nextUrl, auth, headers} = request;
    const isLoggedIn = !!auth;
    const searchParams = nextUrl.searchParams.toString()

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // @ts-ignore
    const token = await getToken({req: request, secret: process.env.AUTH_SECRET});

    const pathWithSearchParams = `${nextUrl.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ''
    }`

    //if subdomain exists
    const customSubDomain = headers
        .get('host')
        ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
        .filter(Boolean)[0]

    if (customSubDomain) {
        return NextResponse.rewrite(
            new URL(`/${customSubDomain}${pathWithSearchParams}`, nextUrl)
        )
    }

    if (
        nextUrl.pathname === '/' ||
        (nextUrl.pathname === '/site' && nextUrl.host === process.env.NEXT_PUBLIC_DOMAIN)
    ) {
        return NextResponse.rewrite(new URL('/site', nextUrl))
    }


    if (isApiAuthRoute) return null


    // TODO: figure out why this isAuthRoute isnt working and also add missing AuthRoutes
    if (isAuthRoute) {
        if (isLoggedIn) {

            if (token?.role === 'USER' && !nextUrl.pathname.startsWith('/company')) {
                return Response.redirect(new URL(`/company/${token?.sub}`, nextUrl));
            }

            if (token?.role === 'SUBACCOUNT' && !nextUrl.pathname.startsWith('/sub-account')) {
                return Response.redirect(new URL(`/sub-account/${token?.sub}`, nextUrl));
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

        if (token?.role === 'USER' && !nextUrl.pathname.startsWith('/company')) {
            return Response.redirect(new URL(`/company/${token.sub}`, nextUrl));
        }

        if (token?.role === 'SUBACCOUNT' && !nextUrl.pathname.startsWith('/sub-account')) {
            return Response.redirect(new URL(`/sub-account/${token.sub}`, nextUrl));
        }

        if (
            nextUrl.pathname.startsWith('/company') ||
            nextUrl.pathname.startsWith('/sub-account')
        ) {
            return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, nextUrl))
        }
    }

    return null
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}


// import { authMiddleware } from '@clerk/nextjs'
// import { NextResponse } from 'next/server'
//
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//     publicRoutes: ['/site', '/api/uploadthing'],
//     async beforeAuth(auth, req) {},
//     async afterAuth(auth, req) {
//         //rewrite for domains
//         const url = req.nextUrl
//         const searchParams = url.searchParams.toString()
//         let hostname = req.headers
//
//         const pathWithSearchParams = `${url.pathname}${
//             searchParams.length > 0 ? `?${searchParams}` : ''
//         }`
//
//         //if subdomain exists
//         const customSubDomain = hostname
//             .get('host')
//             ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
//             .filter(Boolean)[0]
//
//         if (customSubDomain) {
//             return NextResponse.rewrite(
//                 new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
//             )
//         }
//
//         if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
//             return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
//         }
//
//         if (
//             url.pathname === '/' ||
//             (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
//         ) {
//             return NextResponse.rewrite(new URL('/site', req.url))
//         }
//
//         if (
//             url.pathname.startsWith('/agency') ||
//             url.pathname.startsWith('/subaccount')
//         ) {
//             return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//         }
//     },
// })
//
// export const config = {
//     matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }


