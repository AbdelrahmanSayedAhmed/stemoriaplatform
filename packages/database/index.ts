export { PrismaClient } from '@prisma/client'
export * from './lib/db'

// Re-export commonly used types
export type {
  User,
  Course,
  Lesson,
  // Add other Prisma types as needed
} from '@prisma/client'