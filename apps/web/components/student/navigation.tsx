'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@stemoria/ui'
import { User, LogOut, BookOpen, Gamepad2, User as UserIcon, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StudentNavProps {
  className?: string
}

export function StudentNav({ className }: StudentNavProps) {
  const { data: session } = useSession()

  const navigationItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Courses', href: '/courses', icon: BookOpen },
    { label: 'Games', href: '/games', icon: Gamepad2 },
    { label: 'Profile', href: '/profile', icon: UserIcon },
  ]

  return (
    <nav className={cn('bg-white shadow-sm border-b', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-stemoria-blue to-science-turquoise rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🧬</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Stemoria</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-stemoria-blue transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-biology-green to-chemistry-purple rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {session.user?.name || 'Student'}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-2 bg-gray-50 border-t">
        <div className="flex justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-stemoria-blue"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}