import { Button } from '@stemoria/ui'
import Link from 'next/link'
import { Sparkles, Rocket, BookOpen } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-discovery-yellow" />
              <Rocket className="h-10 w-10 text-stemoria-blue" />
              <BookOpen className="h-8 w-8 text-biology-green" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Science Through
            <span className="block stemoria-gradient bg-clip-text text-transparent">
              Interactive Learning
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students exploring biology, chemistry, physics, and math 
            through hands-on experiments, engaging games, and personalized learning paths.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-stemoria-blue hover:bg-blue-700">
              <Link href="/courses">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/games">
                <Sparkles className="mr-2 h-5 w-5" />
                Play Games
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-biology-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Experiments</h3>
            <p className="text-gray-600">Virtual labs and simulations make complex concepts easy to understand</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chemistry-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gamified Learning</h3>
            <p className="text-gray-600">Earn points, unlock achievements, and compete with friends</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-physics-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your learning journey and celebrate achievements</p>
          </div>
        </div>
      </div>
    </section>
  )
}