"use client"

import * as React from "react"
import { ChevronDown, ChevronUp, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Column<T> {
  key: string
  title: string
  width?: string
  sortable?: boolean
  render?: (value: any, row: T, index: number) => React.ReactNode
  className?: string
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  loading?: boolean
  searchable?: boolean
  searchPlaceholder?: string
  pagination?: boolean
  pageSize?: number
  onRowClick?: (row: T) => void
  className?: string
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  searchable = true,
  searchPlaceholder = "Search...",
  pagination = true,
  pageSize = 10,
  onRowClick,
  className = ""
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [sortConfig, setSortConfig] = React.useState<{
    key: string | null
    direction: 'asc' | 'desc'
  }>({ key: null, direction: 'asc' })
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filter data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchQuery) return data
    
    return data.filter((row) =>
      columns.some(column => {
        const value = row[column.key]
        if (value === null || value === undefined) return false
        return String(value).toLowerCase().includes(searchQuery.toLowerCase())
      })
    )
  }, [data, searchQuery, columns])

  // Sort filtered data
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key!]
      const bValue = b[sortConfig.key!]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredData, sortConfig])

  // Paginate sorted data
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData
    
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return sortedData.slice(start, end)
  }, [sortedData, currentPage, pageSize, pagination])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  const handleSort = (key: string) => {
    const column = columns.find(col => col.key === key)
    if (!column?.sortable) return

    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="w-4 h-4 ml-1" /> : 
      <ChevronDown className="w-4 h-4 ml-1" />
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {searchable && (
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                  } ${column.className || ''}`}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center">
                    {column.title}
                    {column.sortable && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap ${column.className || ''}`}
                  >
                    {column.render 
                      ? column.render(row[column.key], row, index)
                      : row[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className="px-6 py-8 text-center text-gray-500"
                >
                  {searchQuery ? 'No results found' : 'No data available'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {Math.min((currentPage - 1) * pageSize + 1, sortedData.length)}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(currentPage * pageSize, sortedData.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium">{sortedData.length}</span> results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              Previous
            </Button>
            
            {/* Page numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1
              if (
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                )
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="px-2 text-gray-500">...</span>
              }
              return null
            })}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}