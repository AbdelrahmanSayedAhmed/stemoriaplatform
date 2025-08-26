export { default } from 'next-auth'
export { getServerSession } from 'next-auth'
export * from './lib/auth-config'
export * from './lib/providers'
export * from './lib/auth-with-db'
export * from './types'

// Re-export commonly used items
export { basicAuthOptions as authOptions } from './lib/auth-with-db'

// Export withAuth helper for API routes
export function withAuth(handler: Function, allowedRoles: string[] = []) {
  return async function(request: Request) {
    // For now, return the handler directly
    // In a real app, this would check auth and roles
    return handler(request);
  };
}
