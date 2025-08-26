import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@stemoria/ui'
import Link from 'next/link'
import { Play, Trophy, Users } from 'lucide-react'

const popularGames = [
  {
    id: 1,
    title: 'DNA Detective',
    description: 'Solve genetic mysteries by analyzing DNA sequences',
    subject: 'Biology',
    players: 2100,
    difficulty: 'Easy',
    color: 'biology-green',
    emoji: '🕵️',
    playTime: '15 min'
  },
  {
    id: 2,
    title: 'Molecule Builder',
    description: 'Create compounds and watch chemical reactions',
    subject: 'Chemistry',
    players: 1800,
    difficulty: 'Medium',
    color: 'chemistry-purple',
    emoji: '⚗️',
    playTime: '20 min'
  },
  {
    id: 3,
    title: 'Space Physics Lab',
    description: 'Launch rockets and explore planetary motion',
    subject: 'Physics',
    players: 1550,
    difficulty: 'Medium',
    color: 'physics-orange',
    emoji: '🚀',
    playTime: '25 min'
  },
  {
    id: 4,
    title: 'Pattern Puzzle',
    description: 'Discover mathematical sequences and patterns',
    subject: 'Mathematics',
    players: 1200,
    difficulty: 'Hard',
    color: 'math-red',
    emoji: '🧩',
    playTime: '30 min'
  }
]

export function PopularGames() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Learning Games
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn through play with our interactive science games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <Card className="science-card group cursor-pointer h-full">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${game.color} rounded-lg flex items-center justify-center mb-3`}>
                    <span className="text-2xl">{game.emoji}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-stemoria-blue transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Play className="h-4 w-4 mr-1" />
                        {game.playTime}
                      </div>
                      <span className={`px-2 py-1 bg-${game.color} bg-opacity-10 text-${game.color} rounded-full text-xs font-medium`}>
                        {game.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {game.players.toLocaleString()} players
                      </div>
                      <div className="flex items-center text-discovery-yellow">
                        <Trophy className="h-4 w-4" />
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
            href="/games"
            className="inline-flex items-center text-stemoria-blue hover:text-blue-700 font-medium"
          >
            Play More Games
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}