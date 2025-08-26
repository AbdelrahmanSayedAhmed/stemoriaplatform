"use client"

import * as React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = [
  { month: 'Jan', users: 8400, newUsers: 1200 },
  { month: 'Feb', users: 9200, newUsers: 800 },
  { month: 'Mar', users: 10100, newUsers: 900 },
  { month: 'Apr', users: 10800, newUsers: 700 },
  { month: 'May', users: 11600, newUsers: 800 },
  { month: 'Jun', users: 12400, newUsers: 800 },
  { month: 'Jul', users: 12854, newUsers: 454 }
]

export function UserGrowthChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
        <p className="text-sm text-gray-600">Total and new user registrations over time</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#2563eb" 
              strokeWidth={2}
              name="Total Users"
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="newUsers" 
              stroke="#10b981" 
              strokeWidth={2}
              name="New Users"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
          <span className="text-gray-600">Total Users</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
          <span className="text-gray-600">New Users</span>
        </div>
      </div>
    </div>
  )
}