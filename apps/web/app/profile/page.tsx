import { getServerSession } from 'next-auth'
import { authOptions } from '@stemoria/auth'
import { redirect } from 'next/navigation'
import { StudentNav } from '@/components/student/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Button } from '@/components/ui'
import { User, BookOpen, Trophy, Clock, Target, Calendar, Star, Zap } from 'lucide-react'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  // Mock user data - in production this would fetch from database
  const userStats = {
    coursesCompleted: 12,
    lessonsFinished: 84,
    totalStudyTime: '142h',
    currentStreak: 7,
    achievements: 15,
    rank: 'Science Explorer',
    experiencePoints: 2450
  }

  const recentActivity = [
    { id: 1, type: 'lesson', title: 'DNA Structure', subject: 'Biology', completedAt: '2024-01-15', progress: 100 },
    { id: 2, type: 'game', title: 'Molecule Builder', subject: 'Chemistry', completedAt: '2024-01-14', score: 95 },
    { id: 3, type: 'lesson', title: 'Newton\'s Laws', subject: 'Physics', completedAt: '2024-01-13', progress: 78 },
    { id: 4, type: 'achievement', title: 'First Course Complete', completedAt: '2024-01-12', achievedAt: '2024-01-12' }
  ]

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first lesson', icon: '🎯', earned: true },
    { id: 2, title: 'Science Explorer', description: 'Complete 10 lessons', icon: '🔬', earned: true },
    { id: 3, title: 'Streak Master', description: '7-day learning streak', icon: '🔥', earned: true },
    { id: 4, title: 'Course Champion', description: 'Complete your first course', icon: '🏆', earned: true },
    { id: 5, title: 'Knowledge Seeker', description: 'Complete 50 lessons', icon: '📚', earned: false },
    { id: 6, title: 'Master Scientist', description: 'Complete 5 courses', icon: '🧪', earned: false }
  ]

  const currentCourses = [
    { id: 1, title: 'Advanced Biology', progress: 75, nextLesson: 'Cell Division' },
    { id: 2, title: 'Chemistry Fundamentals', progress: 45, nextLesson: 'Chemical Bonds' },
    { id: 3, title: 'Physics in Motion', progress: 30, nextLesson: 'Force and Acceleration' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-stemoria-blue to-science-turquoise rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{session.user?.name || 'Student'}</h1>
                <p className="text-lg text-gray-600">{session.user?.email}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="px-3 py-1 bg-stemoria-blue text-white rounded-full text-sm font-medium">
                    {userStats.rank}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="h-4 w-4 mr-1 text-discovery-yellow" />
                    {userStats.experiencePoints} XP
                  </div>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 bg-biology-green rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userStats.coursesCompleted}</div>
                  <p className="text-sm text-gray-600">Courses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 bg-chemistry-purple rounded-lg flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userStats.achievements}</div>
                  <p className="text-sm text-gray-600">Achievements</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 bg-physics-orange rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userStats.totalStudyTime}</div>
                  <p className="text-sm text-gray-600">Study Time</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 bg-math-red rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userStats.currentStreak}</div>
                  <p className="text-sm text-gray-600">Day Streak</p>
                </CardContent>
              </Card>
            </div>

            {/* Current Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{course.title}</h4>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-stemoria-blue rounded-full h-2" 
                          style={{width: `${course.progress}%`}}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                        <Button size="sm">Continue</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        {activity.type === 'lesson' && <BookOpen className="h-4 w-4" />}
                        {activity.type === 'game' && <Trophy className="h-4 w-4" />}
                        {activity.type === 'achievement' && <Star className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-600">
                          {activity.subject || 'Achievement earned'}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(activity.completedAt || activity.achievedAt || '2024-01-01').toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        achievement.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <p className={`font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.title}
                        </p>
                        <p className={`text-xs ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}