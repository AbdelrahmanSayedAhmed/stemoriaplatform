import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@stemoria/ui'
import Link from 'next/link'
import { Clock, Users, Star } from 'lucide-react'

const featuredCourses = [
  {
    id: 1,
    title: 'Introduction to Biology',
    description: 'Explore the fascinating world of living organisms',
    subject: 'Biology',
    duration: '6 weeks',
    students: 1250,
    rating: 4.8,
    color: 'biology-green',
    emoji: '🧬',
    difficulty: 'Beginner'
  },
  {
    id: 2,
    title: 'Chemistry Fundamentals',
    description: 'Master the basics of atoms, molecules, and reactions',
    subject: 'Chemistry',
    duration: '8 weeks',
    students: 890,
    rating: 4.9,
    color: 'chemistry-purple',
    emoji: '🧪',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    title: 'Physics in Motion',
    description: 'Understand forces, energy, and motion in our world',
    subject: 'Physics',
    duration: '7 weeks',
    students: 720,
    rating: 4.7,
    color: 'physics-orange',
    emoji: '⚡',
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    title: 'Mathematical Patterns',
    description: 'Discover the beauty of numbers and equations',
    subject: 'Mathematics',
    duration: '10 weeks',
    students: 1100,
    rating: 4.6,
    color: 'math-red',
    emoji: '📐',
    difficulty: 'Intermediate'
  }
]

export function FeaturedCourses() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your learning journey with our most popular science courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="science-card group cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${course.color} rounded-lg flex items-center justify-center mb-3`}>
                    <span className="text-2xl">{course.emoji}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-stemoria-blue transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <span className={`px-2 py-1 bg-${course.color} bg-opacity-10 text-${course.color} rounded-full text-xs font-medium`}>
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-discovery-yellow text-discovery-yellow" />
                        {course.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center text-stemoria-blue hover:text-blue-700 font-medium"
          >
            View All Courses
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}