import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const providers = [
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

      // Note: Database access will be restored when @stemoria/database is properly configured
      // For now, return null to prevent authentication attempts
      // 
      // const { prisma } = await import('@stemoria/database');
      // const user = await prisma.user.findUnique({
      //   where: { email: parsed.data.email },
      // });

      // if (!user || !user.hashedPassword) {
      //   throw new Error('Invalid credentials');
      // }

      // const isValid = await bcrypt.compare(
      //   parsed.data.password,
      //   user.hashedPassword
      // );

      // if (!isValid) {
      //   throw new Error('Invalid credentials');
      // }

      // // Update last login
      // await prisma.user.update({
      //   where: { id: user.id },
      //   data: { lastLoginAt: new Date() },
      // });

      // return {
      //   id: user.id,
      //   email: user.email,
      //   name: user.name,
      //   role: user.role,
      //   image: user.image,
      // };

      throw new Error('Credentials provider not yet configured');
    },
  }),
];

export { loginSchema };