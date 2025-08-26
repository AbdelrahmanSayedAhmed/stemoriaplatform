import { NextAuthOptions } from 'next-auth';
import './types';

export const authConfig: Partial<NextAuthOptions> = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
  },
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
      // Note: Audit logging requires database connection
      // This will be enabled when @stemoria/database is properly configured
      console.log('Sign in:', { userId: user.id, provider: account?.provider });
    },
  },
};