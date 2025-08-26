import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Calendar } from 'lucide-react'

interface UpcomingClassesProps {
  userId: string
}

export function UpcomingClasses({ userId }: UpcomingClassesProps) {
  // Mock data - in production this would fetch from API
  const upcomingClasses = [
    { id: 1, title: 'Advanced Biology', time: 'Today 2:00 PM' },
    { id: 2, title: 'Chemistry Lab', time: 'Tomorrow 10:00 AM' },
    { id: 3, title: 'Physics Workshop', time: 'Wed 3:00 PM' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          Upcoming Classes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingClasses.map((class_item) => (
            <div key={class_item.id}>
              <p className="font-medium">{class_item.title}</p>
              <p className="text-sm text-gray-600">{class_item.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}