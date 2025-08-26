import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { BookOpen, Trophy, Clock, Target } from 'lucide-react'

interface DashboardStatsProps {
  userId: string
}

export function DashboardStats({ userId }: DashboardStatsProps) {
  // Mock data - in production this would fetch from API
  const stats = [
    {
      title: 'Courses Completed',
      value: '12',
      icon: BookOpen,
      color: 'biology-green'
    },
    {
      title: 'Achievements',
      value: '8',
      icon: Trophy,
      color: 'discovery-yellow'
    },
    {
      title: 'Study Time',
      value: '24h',
      icon: Clock,
      color: 'stemoria-blue'
    },
    {
      title: 'Current Streak',
      value: '7 days',
      icon: Target,
      color: 'chemistry-purple'
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}