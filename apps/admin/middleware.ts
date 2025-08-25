// apps/admin/middleware.ts
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const ADMIN_ROLES = [
  'CONTENT_EDITOR',
  'SUPPORT_AGENT',
  'FINANCE_ADMIN',
  'SYSTEM_ADMIN',
  'SUPER_ADMIN',
];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Check if user has admin role
    if (!token || !ADMIN_ROLES.includes(token.role as string)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    // Role-based path restrictions
    if (path.startsWith('/finance') && !['FINANCE_ADMIN', 'SUPER_ADMIN'].includes(token.role as string)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    if (path.startsWith('/system') && !['SYSTEM_ADMIN', 'SUPER_ADMIN'].includes(token.role as string)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/((?!api/public|_next/static|_next/image|favicon.ico|login|unauthorized).*)'],
};