"use client"

import * as React from "react"
import { UserPlus, BookOpen, Award, Settings, AlertCircle } from "lucide-react"

interface ActivityItem {
  id: string
  type: 'user_registration' | 'content_published' | 'achievement_unlocked' | 'system_update' | 'alert'
  user?: string
  description: string
  timestamp: string
  icon: React.ReactNode
  iconColor: string
}

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'user_registration',
    user: 'Sarah Johnson',
    description: 'New user registered',
    timestamp: '2 minutes ago',
    icon: <UserPlus className="w-4 h-4" />,
    iconColor: 'bg-blue-100 text-blue-600'
  },
  {
    id: '2', 
    type: 'content_published',
    user: 'Dr. Smith',
    description: 'Published new chemistry lesson "Atomic Structure"',
    timestamp: '15 minutes ago',
    icon: <BookOpen className="w-4 h-4" />,
    iconColor: 'bg-green-100 text-green-600'
  },
  {
    id: '3',
    type: 'achievement_unlocked',
    user: 'Alex Chen',
    description: 'Earned "Lab Master" achievement',
    timestamp: '32 minutes ago',
    icon: <Award className="w-4 h-4" />,
    iconColor: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: '4',
    type: 'system_update',
    description: 'System maintenance completed successfully',
    timestamp: '1 hour ago',
    icon: <Settings className="w-4 h-4" />,
    iconColor: 'bg-gray-100 text-gray-600'
  },
  {
    id: '5',
    type: 'alert',
    description: 'High server load detected on node-2',
    timestamp: '2 hours ago',
    icon: <AlertCircle className="w-4 h-4" />,
    iconColor: 'bg-red-100 text-red-600'
  },
  {
    id: '6',
    type: 'user_registration',
    user: 'Maria Rodriguez',
    description: 'New user registered',
    timestamp: '3 hours ago',
    icon: <UserPlus className="w-4 h-4" />,
    iconColor: 'bg-blue-100 text-blue-600'
  },
  {
    id: '7',
    type: 'content_published',
    user: 'Prof. Wilson',
    description: 'Published new physics simulation "Wave Interference"',
    timestamp: '4 hours ago',
    icon: <BookOpen className="w-4 h-4" />,
    iconColor: 'bg-green-100 text-green-600'
  }
]

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <p className="text-sm text-gray-600">Latest platform activities and user actions</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      </div>

      <div className="flow-root">
        <ul className="-mb-8">
          {mockActivities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== mockActivities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${activity.iconColor}`}>
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-900">
                        {activity.user && (
                          <span className="font-medium">{activity.user} </span>
                        )}
                        {activity.description}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time>{activity.timestamp}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}