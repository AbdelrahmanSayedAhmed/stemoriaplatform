// apps/web/app/(dashboard)/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@stemoria/auth';
import { redirect } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardStats } from '@/components/dashboard/stats';
import { RecentLessons } from '@/components/dashboard/recent-lessons';
import { ProgressChart } from '@/components/dashboard/progress-chart';
import { UpcomingClasses } from '@/components/dashboard/upcoming-classes';
import { Achievements } from '@/components/dashboard/achievements';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <DashboardHeader user={session.user} />
      <DashboardStats userId={session.user.id} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <ProgressChart userId={session.user.id} />
        </div>
        <div className="col-span-3">
          <RecentLessons userId={session.user.id} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <UpcomingClasses userId={session.user.id} />
        </div>
        <div className="col-span-3">
          <Achievements userId={session.user.id} />
        </div>
      </div>
    </div>
  );
}
