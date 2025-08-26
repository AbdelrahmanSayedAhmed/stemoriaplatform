import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

interface DashboardHeaderProps {
  user: {
    name?: string | null
    email?: string | null
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.name || 'Student'}!
        </h1>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>
    </div>
  )
}