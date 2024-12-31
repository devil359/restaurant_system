import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const kitchenOrders = [
  {
    id: 1,
    items: [
      { name: 'Burger', quantity: 2 },
      { name: 'Fries', quantity: 2 },
    ],
    status: 'Pending',
  },
  {
    id: 2,
    items: [
      { name: 'Pizza', quantity: 1 },
      { name: 'Salad', quantity: 1 },
    ],
    status: 'In Progress',
  },
  {
    id: 3,
    items: [
      { name: 'Steak', quantity: 1 },
      { name: 'Mashed Potatoes', quantity: 1 },
    ],
    status: 'Ready',
  },
]

export function KitchenOrderList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {kitchenOrders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.quantity}x {item.name}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium">{order.status}</span>
              <Button variant="outline" size="sm">
                {order.status === 'Ready' ? 'Serve' : 'Mark as Ready'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

