"use client"

import * as React from "react"
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Zap } from "lucide-react"

interface HealthMetric {
  name: string
  status: 'healthy' | 'warning' | 'error' | 'maintenance'
  value: string
  description: string
  icon: React.ReactNode
}

const mockMetrics: HealthMetric[] = [
  {
    name: 'API Server',
    status: 'healthy',
    value: '99.9%',
    description: 'All endpoints responding normally',
    icon: <Server className="w-5 h-5" />
  },
  {
    name: 'Database',
    status: 'healthy', 
    value: '2.3ms',
    description: 'Average query response time',
    icon: <Database className="w-5 h-5" />
  },
  {
    name: 'Cache Layer',
    status: 'warning',
    value: '85%',
    description: 'Higher than normal memory usage',
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: 'Background Jobs',
    status: 'maintenance',
    value: 'Paused',
    description: 'Scheduled maintenance in progress',
    icon: <Clock className="w-5 h-5" />
  }
]

function getStatusIcon(status: HealthMetric['status']) {
  switch (status) {
    case 'healthy':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    case 'error':
      return <XCircle className="w-5 h-5 text-red-500" />
    case 'maintenance':
      return <Clock className="w-5 h-5 text-blue-500" />
    default:
      return <CheckCircle className="w-5 h-5 text-gray-500" />
  }
}

function getStatusColor(status: HealthMetric['status']) {
  switch (status) {
    case 'healthy':
      return 'bg-green-50 text-green-800 border-green-200'
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 border-yellow-200'
    case 'error':
      return 'bg-red-50 text-red-800 border-red-200'
    case 'maintenance':
      return 'bg-blue-50 text-blue-800 border-blue-200'
    default:
      return 'bg-gray-50 text-gray-800 border-gray-200'
  }
}

export function SystemHealth() {
  const healthyCount = mockMetrics.filter(m => m.status === 'healthy').length
  const totalCount = mockMetrics.length
  const overallStatus = healthyCount === totalCount ? 'healthy' : 
                       mockMetrics.some(m => m.status === 'error') ? 'error' : 'warning'

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">System Health</h3>
          <p className="text-sm text-gray-600">Real-time system status and performance metrics</p>
        </div>
        <div className="flex items-center">
          {getStatusIcon(overallStatus)}
          <span className={`ml-2 text-sm font-medium px-2 py-1 rounded-full border ${getStatusColor(overallStatus)}`}>
            {healthyCount}/{totalCount} Healthy
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {mockMetrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 text-gray-400">
                {metric.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{metric.name}</p>
                <p className="text-xs text-gray-500 truncate">{metric.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900">{metric.value}</span>
              {getStatusIcon(metric.status)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Last updated</span>
          <span className="text-gray-900 font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  )
}