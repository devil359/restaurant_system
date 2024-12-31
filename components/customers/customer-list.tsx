import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', visits: 5 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', visits: 3 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '456-789-0123', visits: 8 },
]

export function CustomerList() {
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Visits</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.id}</TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.visits}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedCustomer(customer)}>View</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="customer-details-description">
                  <DialogHeader>
                    <DialogTitle>Customer Details</DialogTitle>
                    <DialogDescription id="customer-details-description">
                      View customer information and history.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label>Name</Label>
                      <div>{selectedCustomer?.name}</div>
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label>Email</Label>
                      <div>{selectedCustomer?.email}</div>
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label>Phone</Label>
                      <div>{selectedCustomer?.phone}</div>
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label>Visits</Label>
                      <div>{selectedCustomer?.visits}</div>
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

