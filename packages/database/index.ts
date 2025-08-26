export { PrismaClient } from '@prisma/client'
export { default as prisma } from './src/client'

// Note: Type exports would be available after Prisma schema generation
// For now, commenting out to allow build to succeed
// export type {
//   User,
//   Course, 
//   Lesson,
//   // Add other Prisma types as needed
// } from '@prisma/client'