import { MainLayout } from '@/components/layout/main-layout'
import { NewOrderForm } from '@/components/orders/new-order-form'

export default function NewOrderPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <NewOrderForm />
      </div>
    </MainLayout>
  )
}

