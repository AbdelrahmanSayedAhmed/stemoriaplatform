// apps/admin/app/users/page.tsx
import { prisma } from '@stemoria/database';
import { DataTable } from '@/components/admin/data-table';
import { userColumns } from '@/components/admin/columns/user-columns';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    include: {
      institutions: {
        include: {
          institution: true,
        },
      },
      _count: {
        select: {
          progress: true,
          tutorProfile: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 100,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">Manage all platform users</p>
        </div>
        <Button asChild>
          <Link href="/users/new">
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Link>
        </Button>
      </div>

      <DataTable columns={userColumns} data={users} />
    </div>
  );
}
