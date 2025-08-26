// apps/admin/app/dashboard/page.tsx
import { Suspense } from 'react';
import { StatsGrid } from '@/components/admin/stats-grid';
import { UserGrowthChart } from '@/components/admin/user-growth-chart';
import { RecentActivity } from '@/components/admin/recent-activity';
import { SystemHealth } from '@/components/admin/system-health';
import { ContentStatus } from '@/components/admin/content-status';
import { RevenueMetrics } from '@/components/admin/revenue-metrics';

export default async function AdminDashboard() {
  // Mock session for now - in production this would use getServerSession
  const session = { user: { name: 'Admin User', role: 'ADMIN' } };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {session.user.name}</p>
      </div>

      <Suspense fallback={<StatsGridSkeleton />}>
        <StatsGrid />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<ChartSkeleton />}>
          <UserGrowthChart />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <RevenueMetrics />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<TableSkeleton />}>
            <RecentActivity />
          </Suspense>
        </div>
        <div className="space-y-6">
          <Suspense fallback={<CardSkeleton />}>
            <SystemHealth />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <ContentStatus />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Skeleton components
const StatsGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      </div>
    ))}
  </div>
);

const ChartSkeleton = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="h-64 bg-gray-200 rounded"></div>
  </div>
);

const TableSkeleton = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);

const CardSkeleton = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="h-32 bg-gray-200 rounded"></div>
  </div>
);
