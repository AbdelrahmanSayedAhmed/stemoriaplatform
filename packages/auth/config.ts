import { NextAuthOptions } from 'next-auth';
import { basicAuthOptions } from './lib/auth-with-db';

export const authOptions: NextAuthOptions = basicAuthOptions;
