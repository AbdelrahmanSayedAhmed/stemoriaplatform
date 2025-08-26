"use client"

import * as React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { DollarSign, TrendingUp, TrendingDown, Users } from "lucide-react"

const mockRevenueData = [
  { month: 'Jan', revenue: 24500, subscriptions: 1250 },
  { month: 'Feb', revenue: 28200, subscriptions: 1420 },
  { month: 'Mar', revenue: 31800, subscriptions: 1590 },
  { month: 'Apr', revenue: 29400, subscriptions: 1470 },
  { month: 'May', revenue: 35600, subscriptions: 1780 },
  { month: 'Jun', revenue: 42100, subscriptions: 2105 },
  { month: 'Jul', revenue: 38900, subscriptions: 1945 }
]

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: React.ReactNode
}

function MetricCard({ title, value, change, changeType, icon }: MetricCardProps) {
  const changeColor = changeType === 'positive' ? 'text-green-600' : 'text-red-600'
  const changeIcon = changeType === 'positive' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />
  
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            {icon}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        <div className={`flex items-center ${changeColor}`}>
          {changeIcon}
          <span className="ml-1 text-sm font-medium">{change}</span>
        </div>
      </div>
    </div>
  )
}

export function RevenueMetrics() {
  const totalRevenue = mockRevenueData.reduce((sum, item) => sum + item.revenue, 0)
  const avgMonthlyRevenue = Math.round(totalRevenue / mockRevenueData.length)
  const lastMonth = mockRevenueData[mockRevenueData.length - 1]
  const prevMonth = mockRevenueData[mockRevenueData.length - 2]
  const monthlyChange = ((lastMonth.revenue - prevMonth.revenue) / prevMonth.revenue * 100).toFixed(1)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Revenue Metrics</h3>
        <p className="text-sm text-gray-600">Financial performance and subscription metrics</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <MetricCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          change={`${monthlyChange}%`}
          changeType={parseFloat(monthlyChange) >= 0 ? 'positive' : 'negative'}
          icon={<DollarSign className="w-5 h-5 text-blue-600" />}
        />
        <MetricCard
          title="Avg Monthly"
          value={`$${avgMonthlyRevenue.toLocaleString()}`}
          change="12.5%"
          changeType="positive"
          icon={<Users className="w-5 h-5 text-green-600" />}
        />
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="text-xs fill-gray-600"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-xs fill-gray-600"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: any, name: string) => [
                name === 'revenue' ? `$${value.toLocaleString()}` : value,
                name === 'revenue' ? 'Revenue' : 'Subscriptions'
              ]}
            />
            <Bar 
              dataKey="revenue" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              name="revenue"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}