import { Card, CardContent, CardHeader, CardTitle } from '@stemoria/ui'
import { TrendingUp, Award, Clock, Target } from 'lucide-react'

export function LearningStats() {
  const stats = [
    {
      title: '50,000+',
      description: 'Students Learning',
      icon: TrendingUp,
      color: 'stemoria-blue'
    },
    {
      title: '1,200+',
      description: 'Lessons Completed',
      icon: Award,
      color: 'biology-green'
    },
    {
      title: '95%',
      description: 'Success Rate',
      icon: Target,
      color: 'chemistry-purple'
    },
    {
      title: '24/7',
      description: 'Learning Support',
      icon: Clock,
      color: 'physics-orange'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of a growing community of young scientists and learners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 bg-${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-stemoria-blue to-science-turquoise rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Science Journey?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of students discovering the wonders of science through interactive learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-stemoria-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Sign Up Free
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-stemoria-blue transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}