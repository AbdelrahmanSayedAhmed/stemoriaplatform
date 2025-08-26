import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { BarChart } from 'lucide-react'

interface ProgressChartProps {
  userId: string
}

export function ProgressChart({ userId }: ProgressChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart className="mr-2 h-5 w-5" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center text-gray-500">
          Progress chart will be displayed here
        </div>
      </CardContent>
    </Card>
  )
}