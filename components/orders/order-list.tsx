import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'

const orders = [
  {
    id: 1,
    customer: 'John Doe',
    items: ['Burger', 'Fries', 'Coke'],
    total: 25.99,
    status: 'Preparing',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    items: ['Pizza', 'Salad', 'Water'],
    total: 32.50,
    status: 'Ready',
  },
  {
    id: 3,
    customer: 'Bob Johnson',
    items: ['Steak', 'Mashed Potatoes', 'Wine'],
    total: 45.00,
    status: 'Served',
  },
]

export function OrderList() {
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.items.join(', ')}</TableCell>
            <TableCell>${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <span
                className={cn(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                  {
                    'bg-yellow-100 text-yellow-800': order.status === 'Preparing',
                    'bg-green-100 text-green-800': order.status === 'Ready',
                    'bg-blue-100 text-blue-800': order.status === 'Served',
                  }
                )}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>View</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="order-details-description">
                  <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                    <DialogDescription id="order-details-description">
                      View and manage order information.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-semibold">Order ID:</div>
                      <div>{selectedOrder?.id}</div>
                      <div className="font-semibold">Customer:</div>
                      <div>{selectedOrder?.customer}</div>
                      <div className="font-semibold">Total:</div>
                      <div>${selectedOrder?.total.toFixed(2)}</div>
                      <div className="font-semibold">Status:</div>
                      <div>{selectedOrder?.status}</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Items:</div>
                      <ul className="list-disc list-inside">
                        {selectedOrder?.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

