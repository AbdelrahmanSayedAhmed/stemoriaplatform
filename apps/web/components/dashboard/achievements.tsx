import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Award } from 'lucide-react'

interface AchievementsProps {
  userId: string
}

export function Achievements({ userId }: AchievementsProps) {
  // Mock data - in production this would fetch from API
  const achievements = [
    { id: 1, title: 'First Course Complete', icon: '🎓' },
    { id: 2, title: 'Science Explorer', icon: '🔬' },
    { id: 3, title: '7-Day Streak', icon: '🔥' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5" />
          Recent Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center space-x-3">
              <span className="text-2xl">{achievement.icon}</span>
              <p className="font-medium">{achievement.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}