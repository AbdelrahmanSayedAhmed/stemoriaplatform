import { StudentNav } from '@/components/student/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Play, Trophy, Users, Clock, Star } from 'lucide-react'

const games = [
  {
    id: 1,
    title: 'DNA Detective',
    description: 'Solve genetic mysteries by analyzing DNA sequences and patterns.',
    subject: 'Biology',
    players: 2100,
    difficulty: 'Easy',
    color: 'biology-green',
    emoji: '🕵️',
    playTime: '15 min',
    rating: 4.8,
    category: 'Puzzle'
  },
  {
    id: 2,
    title: 'Molecule Builder',
    description: 'Create compounds and watch amazing chemical reactions unfold.',
    subject: 'Chemistry',
    players: 1800,
    difficulty: 'Medium',
    color: 'chemistry-purple',
    emoji: '⚗️',
    playTime: '20 min',
    rating: 4.9,
    category: 'Simulation'
  },
  {
    id: 3,
    title: 'Space Physics Lab',
    description: 'Launch rockets and explore the physics of planetary motion.',
    subject: 'Physics',
    players: 1550,
    difficulty: 'Medium',
    color: 'physics-orange',
    emoji: '🚀',
    playTime: '25 min',
    rating: 4.7,
    category: 'Simulation'
  },
  {
    id: 4,
    title: 'Pattern Puzzle',
    description: 'Discover mathematical sequences and unlock pattern secrets.',
    subject: 'Mathematics',
    players: 1200,
    difficulty: 'Hard',
    color: 'math-red',
    emoji: '🧩',
    playTime: '30 min',
    rating: 4.6,
    category: 'Puzzle'
  },
  {
    id: 5,
    title: 'Cell Adventure',
    description: 'Journey through a cell and learn about organelles.',
    subject: 'Biology',
    players: 950,
    difficulty: 'Easy',
    color: 'biology-green',
    emoji: '🦠',
    playTime: '18 min',
    rating: 4.5,
    category: 'Adventure'
  },
  {
    id: 6,
    title: 'Periodic Table Quest',
    description: 'Navigate the periodic table and discover element properties.',
    subject: 'Chemistry',
    players: 1350,
    difficulty: 'Medium',
    color: 'chemistry-purple',
    emoji: '⚛️',
    playTime: '22 min',
    rating: 4.8,
    category: 'Adventure'
  },
  {
    id: 7,
    title: 'Energy Converter',
    description: 'Transform different forms of energy in this physics challenge.',
    subject: 'Physics',
    players: 880,
    difficulty: 'Hard',
    color: 'physics-orange',
    emoji: '⚡',
    playTime: '35 min',
    rating: 4.4,
    category: 'Strategy'
  },
  {
    id: 8,
    title: 'Geometry Builder',
    description: 'Construct shapes and explore geometric relationships.',
    subject: 'Mathematics',
    players: 720,
    difficulty: 'Medium',
    color: 'math-red',
    emoji: '📐',
    playTime: '20 min',
    rating: 4.7,
    category: 'Creative'
  }
]

const categories = [
  { name: 'All Games', count: games.length, color: 'gray' },
  { name: 'Puzzle', count: 2, color: 'blue' },
  { name: 'Simulation', count: 2, color: 'green' },
  { name: 'Adventure', count: 2, color: 'purple' },
  { name: 'Strategy', count: 1, color: 'orange' },
  { name: 'Creative', count: 1, color: 'pink' }
]

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Games</h1>
          <p className="text-lg text-gray-600">
            Learn science through fun, interactive games and challenges
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Game Categories Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Game Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Featured Achievement */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-discovery-yellow" />
                  Today's Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm font-medium">Complete 3 games to earn the "Science Explorer" badge!</p>
                  <div className="mt-3 bg-gray-200 rounded-full h-2">
                    <div className="bg-discovery-yellow rounded-full h-2" style={{width: '33%'}}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">1/3 completed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Games Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="science-card group cursor-pointer h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${game.color} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="text-3xl">{game.emoji}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-stemoria-blue transition-colors">
                      {game.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-3 py-1 bg-${game.color} bg-opacity-10 text-${game.color} rounded-full font-medium`}>
                          {game.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {game.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          {game.playTime}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {game.players.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 mr-1 fill-discovery-yellow text-discovery-yellow" />
                          {game.rating}
                        </div>
                        <button className="bg-stemoria-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                          <Play className="mr-1 h-4 w-4" />
                          Play Now
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