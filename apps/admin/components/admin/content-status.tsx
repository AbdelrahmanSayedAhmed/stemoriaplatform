"use client"

import * as React from "react"
import { FileText, Eye, Edit, Clock, CheckCircle, AlertCircle } from "lucide-react"

interface ContentStat {
  label: string
  value: number
  icon: React.ReactNode
  color: string
}

interface ContentItem {
  id: string
  title: string
  type: 'lesson' | 'lab' | 'game' | 'tool'
  status: 'published' | 'draft' | 'review' | 'scheduled'
  author: string
  lastModified: string
}

const contentStats: ContentStat[] = [
  {
    label: 'Published',
    value: 1847,
    icon: <CheckCircle className="w-4 h-4" />,
    color: 'text-green-600 bg-green-100'
  },
  {
    label: 'In Review',
    value: 23,
    icon: <Eye className="w-4 h-4" />,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    label: 'Draft',
    value: 156,
    icon: <Edit className="w-4 h-4" />,
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    label: 'Scheduled',
    value: 12,
    icon: <Clock className="w-4 h-4" />,
    color: 'text-purple-600 bg-purple-100'
  }
]

const recentContent: ContentItem[] = [
  {
    id: '1',
    title: 'Introduction to Quantum Physics',
    type: 'lesson',
    status: 'review',
    author: 'Dr. Emily Chen',
    lastModified: '2 hours ago'
  },
  {
    id: '2', 
    title: 'DNA Extraction Lab',
    type: 'lab',
    status: 'published',
    author: 'Prof. Michael Johnson',
    lastModified: '4 hours ago'
  },
  {
    id: '3',
    title: 'Periodic Table Challenge',
    type: 'game',
    status: 'draft',
    author: 'Sarah Wilson',
    lastModified: '1 day ago'
  },
  {
    id: '4',
    title: 'Circuit Simulator',
    type: 'tool',
    status: 'scheduled',
    author: 'Alex Rodriguez',
    lastModified: '2 days ago'
  }
]

function getStatusBadge(status: ContentItem['status']) {
  switch (status) {
    case 'published':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'review':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'draft':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'scheduled':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

function getTypeIcon(type: ContentItem['type']) {
  switch (type) {
    case 'lesson':
      return <FileText className="w-4 h-4" />
    case 'lab':
      return <AlertCircle className="w-4 h-4" />
    case 'game':
      return <Eye className="w-4 h-4" />
    case 'tool':
      return <Edit className="w-4 h-4" />
    default:
      return <FileText className="w-4 h-4" />
  }
}

export function ContentStatus() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Content Status</h3>
          <p className="text-sm text-gray-600">Overview of content pipeline and publishing status</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Manage Content
        </button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {contentStats.map((stat) => (
          <div key={stat.label} className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900">{stat.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Content */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Activity</h4>
        <div className="space-y-3">
          {recentContent.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="flex-shrink-0 text-gray-400">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                  <p className="text-xs text-gray-500">by {item.author} • {item.lastModified}</p>
                </div>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadge(item.status)}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
          View Content Pipeline →
        </button>
      </div>
    </div>
  )
}