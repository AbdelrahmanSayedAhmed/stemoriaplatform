// apps/admin/app/users/page.tsx
import { DataTable } from '@/components/admin/data-table';
import { userColumns } from '@/components/admin/columns/user-columns';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

// Mock data for testing - in production this would use prisma
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'STUDENT' as const,
    emailVerified: new Date(),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
    institutions: [{
      institution: { id: '1', name: 'MIT' }
    }],
    _count: { progress: 15, tutorProfile: 0 }
  },
  {
    id: '2', 
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'TUTOR' as const,
    emailVerified: null,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date(),
    institutions: [{
      institution: { id: '2', name: 'Stanford University' }
    }],
    _count: { progress: 8, tutorProfile: 1 }
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@stemoria.com', 
    role: 'ADMIN' as const,
    emailVerified: new Date(),
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date(),
    institutions: [],
    _count: { progress: 0, tutorProfile: 0 }
  }
];

export default async function UsersPage() {
  // In production, this would be:
  // const users = await prisma.user.findMany({ ... });
  const users = mockUsers;

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
