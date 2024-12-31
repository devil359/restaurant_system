import { MainLayout } from '@/components/layout/main-layout'
import { DashboardMetrics } from '@/components/dashboard/metrics'
import { OrderStatus } from '@/components/dashboard/order-status'

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <DashboardMetrics />
        <OrderStatus />
      </div>
    </MainLayout>
  )
}

