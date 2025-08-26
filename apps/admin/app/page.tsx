import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'STEMORIA Admin Dashboard',
  description: 'Comprehensive STEM Education Platform Administration',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            🚀 STEMORIA Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the comprehensive STEM education platform administration panel
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Dashboard</h3>
              <p className="text-sm text-gray-600">View platform analytics and metrics</p>
              <a href="/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                View Dashboard →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Content</h3>
              <p className="text-sm text-gray-600">Manage STEM educational content</p>
              <a href="/content" className="text-blue-600 hover:text-blue-800 font-medium">
                Manage Content →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Users</h3>
              <p className="text-sm text-gray-600">Manage students and educators</p>
              <a href="/users" className="text-blue-600 hover:text-blue-800 font-medium">
                Manage Users →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">API Status</h3>
              <p className="text-sm text-gray-600">Check system health</p>
              <a href="/api/stats" className="text-blue-600 hover:text-blue-800 font-medium">
                View Stats →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
