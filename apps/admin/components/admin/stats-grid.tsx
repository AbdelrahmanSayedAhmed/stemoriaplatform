"use client"

import * as React from "react"
import { Users, BookOpen, TrendingUp, Award } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: React.ReactNode
  iconColor: string
}

function StatCard({ title, value, change, changeType, icon, iconColor }: StatCardProps) {
  const changeColor = changeType === 'positive' ? 'text-green-600' : 
                     changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className={`text-sm ${changeColor} flex items-center mt-1`}>
            {change}
          </p>
        </div>
      </div>
    </div>
  )
}

export function StatsGrid() {
  const stats = [
    {
      title: "Total Users",
      value: "12,854",
      change: "+12% from last month",
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      iconColor: "bg-blue-100"
    },
    {
      title: "Active Content",
      value: "2,847",
      change: "+8% from last month", 
      changeType: 'positive' as const,
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      iconColor: "bg-green-100"
    },
    {
      title: "Engagement Rate",
      value: "89.2%",
      change: "+3.2% from last month",
      changeType: 'positive' as const,
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      iconColor: "bg-purple-100"
    },
    {
      title: "Achievements",
      value: "45,672",
      change: "+15% from last month",
      changeType: 'positive' as const,
      icon: <Award className="w-6 h-6 text-orange-600" />,
      iconColor: "bg-orange-100"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          icon={stat.icon}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  )
}