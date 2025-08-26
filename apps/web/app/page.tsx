import { StudentNav } from '@/components/student/navigation'
import { Hero } from '@/components/student/hero'
import { FeaturedCourses } from '@/components/student/featured-courses'
import { PopularGames } from '@/components/student/popular-games'
import { LearningStats } from '@/components/student/learning-stats'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <StudentNav />
      <main>
        <Hero />
        <FeaturedCourses />
        <PopularGames />
        <LearningStats />
      </main>
    </div>
  )
}