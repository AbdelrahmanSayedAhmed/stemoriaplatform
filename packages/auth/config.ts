//packages/auth/src/config.ts
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@stemoria/database';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        
        if (!parsed.success) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isValid = await bcrypt.compare(
          parsed.data.password,
          user.hashedPassword
        );

        if (!isValid) {
          throw new Error('Invalid credentials');
        }

        // Update last login
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        });

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      
      if (account) {
        token.accessToken = account.access_token;
      }
      
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {
      // Log sign in
      await prisma.auditLog.create({
        data: {
          actorId: user.id,
          actorEmail: user.email,
          action: 'SIGN_IN',
          resource: 'auth',
          details: {
            provider: account?.provider,
            timestamp: new Date(),
          },
        },
      });
    },
  },
};
```

### packages/auth/src/middleware.ts
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function withAuth(
  request: NextRequest,
  requiredRole?: string | string[]
) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!roles.includes(token.role as string)) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }
  }

  return token;
}

export function createAuthMiddleware(config: {
  publicRoutes?: string[];
  protectedRoutes?: { path: string; roles?: string[] }[];
}) {
  return async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if route is public
    if (config.publicRoutes?.some(route => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    // Check protected routes
    const protectedRoute = config.protectedRoutes?.find(route =>
      pathname.startsWith(route.path)
    );

    if (protectedRoute) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      if (protectedRoute.roles) {
        if (!protectedRoute.roles.includes(token.role as string)) {
          return NextResponse.redirect(new URL('/403', request.url));
        }
      }
    }

    return NextResponse.next();
  };
}