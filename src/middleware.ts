import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.rewrite(new URL('/site', request.url))
}

export const config = {
    matcher: '/'
}