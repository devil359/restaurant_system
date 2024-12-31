import { ArrowUpRight, Clock, Package, RefreshCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Items To Reorder</CardTitle>
          <RefreshCcw className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +2 since last check
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Reservations</CardTitle>
          <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">4</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Next in 2 hours
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending KOT</CardTitle>
          <Package className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">6</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            2 urgent orders
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">$662.00</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +20.1% from yesterday
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

