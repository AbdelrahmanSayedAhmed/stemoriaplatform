//packages/database/src/client.ts
import { MockPrismaClient } from './mock-client';

const globalForPrisma = global as unknown as { prisma: MockPrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new MockPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

