export { PrismaClient } from '@prisma/client'
export { default as prisma } from './src/client'

// Re-export commonly used types
export type {
  User,
  Course,
  Lesson,
  // Add other Prisma types as needed
} from '@prisma/client'