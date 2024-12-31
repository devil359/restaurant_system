import { MainLayout } from '@/components/layout/main-layout'
import { KitchenOrderList } from '@/components/kitchen/kitchen-order-list'

export default function KitchenPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Kitchen Orders</h1>
        <KitchenOrderList />
      </div>
    </MainLayout>
  )
}

