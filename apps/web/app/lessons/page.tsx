import { StudentNav } from '@/components/student/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Button } from '@/components/ui'
import { BookOpen, Clock, CheckCircle, PlayCircle, FileText, Video, HelpCircle } from 'lucide-react'

const lessons = [
  {
    id: 1,
    title: 'Introduction to Cell Biology',
    description: 'Learn about the basic structure and function of cells, the fundamental units of life.',
    subject: 'Biology',
    duration: '45 min',
    difficulty: 'Beginner',
    color: 'biology-green',
    emoji: '🦠',
    type: 'video',
    completed: true,
    progress: 100
  },
  {
    id: 2,
    title: 'DNA Structure and Function',
    description: 'Discover the double helix structure of DNA and how genetic information is stored.',
    subject: 'Biology',
    duration: '35 min',
    difficulty: 'Intermediate',
    color: 'biology-green',
    emoji: '🧬',
    type: 'interactive',
    completed: true,
    progress: 100
  },
  {
    id: 3,
    title: 'Chemical Bonds and Molecules',
    description: 'Understanding how atoms bond together to form molecules and compounds.',
    subject: 'Chemistry',
    duration: '40 min',
    difficulty: 'Beginner',
    color: 'chemistry-purple',
    emoji: '⚛️',
    type: 'reading',
    completed: false,
    progress: 65
  },
  {
    id: 4,
    title: 'Periodic Table Exploration',
    description: 'Navigate the periodic table and learn about element properties and trends.',
    subject: 'Chemistry',
    duration: '50 min',
    difficulty: 'Intermediate',
    color: 'chemistry-purple',
    emoji: '🔬',
    type: 'interactive',
    completed: false,
    progress: 0
  },
  {
    id: 5,
    title: 'Forces and Motion',
    description: 'Explore Newton\'s laws and understand how forces affect motion.',
    subject: 'Physics',
    duration: '55 min',
    difficulty: 'Intermediate',
    color: 'physics-orange',
    emoji: '🚀',
    type: 'video',
    completed: false,
    progress: 0
  },
  {
    id: 6,
    title: 'Energy Transformations',
    description: 'Learn about different forms of energy and how they can be converted.',
    subject: 'Physics',
    duration: '42 min',
    difficulty: 'Intermediate',
    color: 'physics-orange',
    emoji: '⚡',
    type: 'interactive',
    completed: false,
    progress: 0
  },
  {
    id: 7,
    title: 'Algebraic Equations',
    description: 'Master the fundamentals of solving linear and quadratic equations.',
    subject: 'Mathematics',
    duration: '38 min',
    difficulty: 'Beginner',
    color: 'math-red',
    emoji: '📐',
    type: 'reading',
    completed: false,
    progress: 25
  },
  {
    id: 8,
    title: 'Geometric Shapes and Patterns',
    description: 'Explore the properties of shapes and discover geometric relationships.',
    subject: 'Mathematics',
    duration: '45 min',
    difficulty: 'Beginner',
    color: 'math-red',
    emoji: '📊',
    type: 'interactive',
    completed: false,
    progress: 0
  }
]

const subjects = [
  { name: 'All Subjects', count: lessons.length, color: 'gray' },
  { name: 'Biology', count: 2, color: 'biology-green' },
  { name: 'Chemistry', count: 2, color: 'chemistry-purple' },
  { name: 'Physics', count: 2, color: 'physics-orange' },
  { name: 'Mathematics', count: 2, color: 'math-red' }
]

function getLessonIcon(type: string) {
  switch (type) {
    case 'video':
      return Video
    case 'reading':
      return FileText
    case 'interactive':
      return PlayCircle
    default:
      return BookOpen
  }
}

export default function LessonsPage() {
  const completedLessons = lessons.filter(lesson => lesson.completed).length
  const inProgressLessons = lessons.filter(lesson => lesson.progress > 0 && !lesson.completed).length
  const totalStudyTime = lessons.reduce((acc, lesson) => {
    const time = parseInt(lesson.duration.split(' ')[0])
    return acc + (lesson.completed ? time : Math.floor(time * lesson.progress / 100))
  }, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Science Lessons</h1>
          <p className="text-lg text-gray-600">
            Master science concepts through structured, interactive lessons
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="w-8 h-8 bg-biology-green rounded-lg flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedLessons}</div>
              <p className="text-sm text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="w-8 h-8 bg-chemistry-purple rounded-lg flex items-center justify-center">
                <PlayCircle className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inProgressLessons}</div>
              <p className="text-sm text-gray-600">In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="w-8 h-8 bg-physics-orange rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudyTime}m</div>
              <p className="text-sm text-gray-600">Study Time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="w-8 h-8 bg-math-red rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lessons.length}</div>
              <p className="text-sm text-gray-600">Total Lessons</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filter by Subject</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {subjects.map((subject) => (
                  <button
                    key={subject.name}
                    className={`w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-sm text-gray-500">({subject.count})</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-stemoria-blue" />
                  Study Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-biology-green">📝</span>
                    <p>Take notes while watching video lessons</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-chemistry-purple">🔄</span>
                    <p>Review completed lessons regularly</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-physics-orange">🎯</span>
                    <p>Set daily learning goals</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-math-red">💡</span>
                    <p>Practice with interactive exercises</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lessons Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lessons.map((lesson) => {
                const Icon = getLessonIcon(lesson.type)
                return (
                  <Card key={lesson.id} className="science-card group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 bg-${lesson.color} rounded-lg flex items-center justify-center`}>
                          <span className="text-2xl">{lesson.emoji}</span>
                        </div>
                        {lesson.completed && (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-stemoria-blue transition-colors">
                        {lesson.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 line-clamp-2">
                        {lesson.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className={`px-3 py-1 bg-${lesson.color} bg-opacity-10 text-${lesson.color} rounded-full font-medium`}>
                            {lesson.difficulty}
                          </span>
                          <div className="flex items-center text-gray-600">
                            <Icon className="h-4 w-4 mr-1" />
                            {lesson.type}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {lesson.duration}
                          </div>
                          <span className="font-medium">{lesson.subject}</span>
                        </div>

                        {/* Progress Bar */}
                        {lesson.progress > 0 && (
                          <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{lesson.progress}%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className={`bg-${lesson.color} rounded-full h-2`}
                                style={{width: `${lesson.progress}%`}}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        <div className="pt-2">
                          <Button 
                            className="w-full" 
                            variant={lesson.completed ? "outline" : "default"}
                          >
                            {lesson.completed ? 'Review Lesson' : 
                             lesson.progress > 0 ? 'Continue' : 'Start Lesson'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}