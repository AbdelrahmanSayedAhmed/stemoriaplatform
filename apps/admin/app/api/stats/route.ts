// apps/admin/app/api/stats/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@stemoria/database';
import { withAuth } from '@stemoria/auth';

export const GET = withAuth(async (request: Request) => {
  const [
    totalUsers,
    totalInstitutions,
    totalLessons,
    monthlyRevenue,
    activeSubscriptions,
    newUsersToday,
    activeSessions,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.institution.count(),
    prisma.lesson.count({ where: { status: 'PUBLISHED' } }),
    // Calculate monthly revenue
    prisma.invoice.aggregate({
      where: {
        status: 'PAID',
        paidAt: {
          gte: new Date(new Date().setDate(1)), // First day of current month
        },
      },
      _sum: {
        amount: true,
      },
    }),
    prisma.subscription.count({ where: { status: 'ACTIVE' } }),
    prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),
    prisma.tutorSession.count({ where: { status: 'IN_PROGRESS' } }),
  ]);

  return NextResponse.json({
    totalUsers,
    totalInstitutions,
    totalLessons,
    monthlyRevenue: monthlyRevenue._sum.amount || 0,
    activeSubscriptions,
    newUsersToday,
    activeSessions,
  });
}, ['SYSTEM_ADMIN', 'SUPER_ADMIN']);
