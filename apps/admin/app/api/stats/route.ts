// apps/admin/app/api/stats/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@stemoria/database';
import { withAuth } from '@stemoria/auth';

export const GET = withAuth(async (request: Request) => {
  // Get actual data from available models (User, Course)
  const [
    totalUsers,
    totalCourses,
    newUsersToday,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.course.count(),
    prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),
  ]);

  // TODO: Replace with actual database queries once these models are added to schema:
  // - Institution model for totalInstitutions
  // - Lesson model for totalLessons 
  // - Invoice model for monthlyRevenue calculation
  // - Subscription model for activeSubscriptions
  // - TutorSession model for activeSessions
  const mockStats = {
    totalInstitutions: 12, // Mock: institutions count
    totalLessons: totalCourses * 5, // Mock: estimate lessons from courses
    monthlyRevenue: 15420, // Mock: monthly revenue in cents/dollars
    activeSubscriptions: 89, // Mock: active subscriptions
    activeSessions: 23, // Mock: active tutor sessions
  };

  return NextResponse.json({
    totalUsers,
    totalInstitutions: mockStats.totalInstitutions,
    totalLessons: mockStats.totalLessons,
    monthlyRevenue: mockStats.monthlyRevenue,
    activeSubscriptions: mockStats.activeSubscriptions,
    newUsersToday,
    activeSessions: mockStats.activeSessions,
  });
}, ['SYSTEM_ADMIN', 'SUPER_ADMIN']);
