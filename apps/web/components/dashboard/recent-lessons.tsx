import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { BookOpen } from 'lucide-react'

interface RecentLessonsProps {
  userId: string
}

export function RecentLessons({ userId }: RecentLessonsProps) {
  // Mock data - in production this would fetch from API
  const recentLessons = [
    { id: 1, title: 'DNA Structure', subject: 'Biology', progress: 85 },
    { id: 2, title: 'Chemical Bonds', subject: 'Chemistry', progress: 92 },
    { id: 3, title: 'Newton\'s Laws', subject: 'Physics', progress: 78 }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Recent Lessons
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentLessons.map((lesson) => (
            <div key={lesson.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{lesson.title}</p>
                <p className="text-sm text-gray-600">{lesson.subject}</p>
              </div>
              <div className="text-sm text-gray-600">{lesson.progress}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}