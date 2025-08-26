//packages/database/src/index.ts
// Try to export from real Prisma client, fall back to mock
try {
  export * from '@prisma/client';
} catch {
  // Prisma client not generated, export mock types
  export { PrismaClient, MockPrismaClient } from './mock-client';
}

export { default as prisma } from './client';


