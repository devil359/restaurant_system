import { MainLayout } from '@/components/layout/main-layout'
import { AnalyticsDashboard } from '@/components/analytics/analytics-dashboard'

export default function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        <AnalyticsDashboard />
      </div>
    </MainLayout>
  )
}

