import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from "@/lib/utils"

interface Order {
  id: number
  type: 'Dine In' | 'Take Away'
  attendant: string
  time: string
  status: 'Paid' | 'KOT Pending' | 'Bill Generated' | 'Items Served'
  price: number
}

const orders: Order[] = [
  {
    id: 112,
    type: 'Take Away',
    attendant: 'Laura Olivia-228',
    time: '09-Jan-2023 10:00:00',
    status: 'Paid',
    price: 300.0,
  },
  {
    id: 111,
    type: 'Take Away',
    attendant: 'Michael Jack-227',
    time: '10-Jan-2023 09:05:00',
    status: 'KOT Pending',
    price: 735.0,
  },
  {
    id: 110,
    type: 'Dine In',
    attendant: 'Chris Thomas-226',
    time: '04-Jan-2023 01:47:53',
    status: 'Paid',
    price: 735.0,
  },
  {
    id: 109,
    type: 'Dine In',
    attendant: 'Hannah Liam-229',
    time: '20-Jan-2023 05:30:00',
    status: 'Bill Generated',
    price: 300.0,
  },
  {
    id: 108,
    type: 'Dine In',
    attendant: 'Laura Olivia-228',
    time: '23-Jan-2023 00:47:53',
    status: 'Items Served',
    price: 335.0,
  },
]

export function OrderStatus() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Order Status</h2>
        <Button variant="link" asChild>
          <Link href="/orders">View All</Link>
        </Button>
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Attendant</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.attendant}</TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell>
                  <div
                    className={cn(
                      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                      {
                        'bg-green-100 text-green-700': order.status === 'Paid',
                        'bg-yellow-100 text-yellow-700':
                          order.status === 'KOT Pending',
                        'bg-blue-100 text-blue-700':
                          order.status === 'Bill Generated',
                        'bg-purple-100 text-purple-700':
                          order.status === 'Items Served',
                      }
                    )}
                  >
                    {order.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${order.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

