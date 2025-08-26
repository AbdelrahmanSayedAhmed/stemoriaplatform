"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Mail, Shield, User, Calendar } from "lucide-react"
import type { Column } from "../data-table"

// User type based on the Prisma schema usage in apps/admin/app/users/page.tsx
interface User {
  id: string
  name: string | null
  email: string
  role: 'STUDENT' | 'TUTOR' | 'ADMIN' | 'SYSTEM_ADMIN' | 'SUPER_ADMIN'
  emailVerified: Date | null
  createdAt: Date
  updatedAt: Date
  institutions: Array<{
    institution: {
      id: string
      name: string
    }
  }>
  _count: {
    progress: number
    tutorProfile: number
  }
}

function getRoleBadge(role: User['role']) {
  const roleConfig = {
    STUDENT: { color: 'bg-blue-100 text-blue-800', label: 'Student' },
    TUTOR: { color: 'bg-green-100 text-green-800', label: 'Tutor' },
    ADMIN: { color: 'bg-purple-100 text-purple-800', label: 'Admin' },
    SYSTEM_ADMIN: { color: 'bg-red-100 text-red-800', label: 'System Admin' },
    SUPER_ADMIN: { color: 'bg-gray-100 text-gray-800', label: 'Super Admin' }
  }

  const config = roleConfig[role] || roleConfig.STUDENT
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  )
}

function getVerificationStatus(emailVerified: Date | null) {
  if (emailVerified) {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <Mail className="w-3 h-3 mr-1" />
        Verified
      </span>
    )
  }
  
  return (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
      <Mail className="w-3 h-3 mr-1" />
      Pending
    </span>
  )
}

export const userColumns: Column<User>[] = [
  {
    key: 'name',
    title: 'User',
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
          <User className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">
            {row.name || 'Unnamed User'}
          </div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      </div>
    )
  },
  {
    key: 'role',
    title: 'Role',
    sortable: true,
    render: (value) => getRoleBadge(value)
  },
  {
    key: 'emailVerified',
    title: 'Status',
    sortable: true,
    render: (value) => getVerificationStatus(value)
  },
  {
    key: 'institutions',
    title: 'Institution',
    render: (value: User['institutions']) => {
      if (!value || value.length === 0) {
        return <span className="text-gray-500 text-sm">No institution</span>
      }
      
      const institution = value[0]?.institution
      if (value.length === 1) {
        return <span className="text-sm text-gray-900">{institution.name}</span>
      }
      
      return (
        <div>
          <span className="text-sm text-gray-900">{institution.name}</span>
          {value.length > 1 && (
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
              +{value.length - 1} more
            </span>
          )}
        </div>
      )
    }
  },
  {
    key: '_count',
    title: 'Activity',
    render: (value: User['_count']) => (
      <div className="text-sm text-gray-900">
        <div>{value.progress} lessons</div>
        {value.tutorProfile > 0 && (
          <div className="text-xs text-gray-500">Tutor profile</div>
        )}
      </div>
    )
  },
  {
    key: 'createdAt',
    title: 'Joined',
    sortable: true,
    render: (value) => (
      <div className="text-sm text-gray-900 flex items-center">
        <Calendar className="w-4 h-4 mr-1 text-gray-400" />
        {new Date(value).toLocaleDateString()}
      </div>
    )
  },
  {
    key: 'actions',
    title: 'Actions',
    className: 'text-right',
    render: (_, row) => (
      <div className="flex items-center justify-end space-x-2">
        <Button variant="ghost" size="sm">
          View
        </Button>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    )
  }
]