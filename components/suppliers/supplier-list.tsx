import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const suppliers = [
  { id: 1, name: 'Fresh Produce Co.', contact: 'John Smith', phone: '123-456-7890', email: 'john@freshproduce.com' },
  { id: 2, name: 'Meat Masters', contact: 'Jane Doe', phone: '987-654-3210', email: 'jane@meatmasters.com' },
  { id: 3, name: 'Bakery Supplies Inc.', contact: 'Bob Johnson', phone: '456-789-0123', email: 'bob@bakerysupplies.com' },
]

export function SupplierList() {
  const [selectedSupplier, setSelectedSupplier] = useState<typeof suppliers[0] | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell>{supplier.id}</TableCell>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>{supplier.contact}</TableCell>
            <TableCell>{supplier.phone}</TableCell>
            <TableCell>{supplier.email}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedSupplier(supplier)}>Edit</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="supplier-edit-description">
                  <DialogHeader>
                    <DialogTitle>Edit Supplier</DialogTitle>
                    <DialogDescription id="supplier-edit-description">
                      Update supplier information and contact details.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={selectedSupplier?.name} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="contact">Contact</Label>
                      <Input id="contact" defaultValue={selectedSupplier?.contact} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={selectedSupplier?.phone} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={selectedSupplier?.email} />
                    </div>
                    <Button type="submit">Update Supplier</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

