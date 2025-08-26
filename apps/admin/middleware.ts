// apps/admin/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Note: In production, this would use next-auth middleware
// For now, we'll allow all requests for testing purposes

export function middleware(request: NextRequest) {
  // In production, this would:
  // 1. Check authentication status  
  // 2. Verify admin role permissions
  // 3. Handle role-based path restrictions
  
  // For now, just allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/public|_next/static|_next/image|favicon.ico|login|unauthorized).*)'],
};