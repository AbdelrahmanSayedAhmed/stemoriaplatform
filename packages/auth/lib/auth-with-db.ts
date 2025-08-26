import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { authConfig } from './auth-config';
import { providers } from './providers';

// This helper creates the full auth configuration with Prisma adapter
export function createAuthOptions(prisma: any): NextAuthOptions {
  return {
    ...authConfig,
    adapter: PrismaAdapter(prisma) as any, // Type cast to avoid adapter compatibility issues
    providers,
    events: {
      ...authConfig.events,
      async signIn({ user, account, profile }) {
        // Log sign in with database
        try {
          await prisma.auditLog.create({
            data: {
              actorId: user.id!,
              actorEmail: user.email!,
              action: 'SIGN_IN',
              resource: 'auth',
              details: {
                provider: account?.provider,
                timestamp: new Date(),
              },
            },
          });
        } catch (error) {
          console.error('Failed to log sign in:', error);
        }
      },
    },
  };
}

// Export a basic configuration without database for development
export const basicAuthOptions: NextAuthOptions = {
  ...authConfig,
  providers,
};