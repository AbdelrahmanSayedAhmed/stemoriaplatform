import { StudentNav } from '@/components/student/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { BookOpen, Clock, Users, Star } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Introduction to Biology',
    description: 'Explore the fascinating world of living organisms, from cells to ecosystems.',
    subject: 'Biology',
    duration: '6 weeks',
    students: 1250,
    rating: 4.8,
    difficulty: 'Beginner',
    color: 'biology-green',
    emoji: '🧬',
    lessons: 24,
    image: '/biology-course.jpg'
  },
  {
    id: 2,
    title: 'Chemistry Fundamentals',
    description: 'Master the basics of atoms, molecules, and chemical reactions.',
    subject: 'Chemistry',
    duration: '8 weeks',
    students: 890,
    rating: 4.9,
    difficulty: 'Beginner',
    color: 'chemistry-purple',
    emoji: '🧪',
    lessons: 32,
    image: '/chemistry-course.jpg'
  },
  {
    id: 3,
    title: 'Physics in Motion',
    description: 'Understand forces, energy, and motion in our everyday world.',
    subject: 'Physics',
    duration: '7 weeks',
    students: 720,
    rating: 4.7,
    difficulty: 'Intermediate',
    color: 'physics-orange',
    emoji: '⚡',
    lessons: 28,
    image: '/physics-course.jpg'
  },
  {
    id: 4,
    title: 'Mathematical Patterns',
    description: 'Discover the beauty of numbers, equations, and mathematical relationships.',
    subject: 'Mathematics',
    duration: '10 weeks',
    students: 1100,
    rating: 4.6,
    difficulty: 'Intermediate',
    color: 'math-red',
    emoji: '📐',
    lessons: 40,
    image: '/math-course.jpg'
  },
  {
    id: 5,
    title: 'Advanced Biology: Genetics',
    description: 'Deep dive into DNA, heredity, and genetic engineering.',
    subject: 'Biology',
    duration: '12 weeks',
    students: 580,
    rating: 4.9,
    difficulty: 'Advanced',
    color: 'biology-green',
    emoji: '🧬',
    lessons: 48,
    image: '/genetics-course.jpg'
  },
  {
    id: 6,
    title: 'Organic Chemistry',
    description: 'Explore carbon-based compounds and their reactions.',
    subject: 'Chemistry',
    duration: '14 weeks',
    students: 420,
    rating: 4.5,
    difficulty: 'Advanced',
    color: 'chemistry-purple',
    emoji: '⚗️',
    lessons: 56,
    image: '/organic-chemistry.jpg'
  }
]

const subjects = [
  { name: 'All Subjects', count: courses.length, color: 'gray' },
  { name: 'Biology', count: 2, color: 'biology-green' },
  { name: 'Chemistry', count: 2, color: 'chemistry-purple' },
  { name: 'Physics', count: 1, color: 'physics-orange' },
  { name: 'Mathematics', count: 1, color: 'math-red' }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Science Courses</h1>
          <p className="text-lg text-gray-600">
            Discover and learn science through our comprehensive course library
          </p>
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
          </div>

          {/* Course Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="science-card group cursor-pointer">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${course.color} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="text-3xl">{course.emoji}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-stemoria-blue transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-3 py-1 bg-${course.color} bg-opacity-10 text-${course.color} rounded-full font-medium`}>
                          {course.difficulty}
                        </span>
                        <div className="flex items-center text-gray-600">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {course.lessons} lessons
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 mr-1 fill-discovery-yellow text-discovery-yellow" />
                          {course.rating}
                        </div>
                        <button className="text-sm font-medium text-stemoria-blue hover:text-blue-700">
                          Start Course →
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}