import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const menuItems = [
  { id: 1, name: 'Burger', category: 'Main Course', price: 12.99, status: 'Available' },
  { id: 2, name: 'Caesar Salad', category: 'Appetizer', price: 8.99, status: 'Available' },
  { id: 3, name: 'Chocolate Cake', category: 'Dessert', price: 6.99, status: 'Out of Stock' },
]

export function MenuList() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<typeof menuItems[0] | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menuItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedMenuItem(item)}>Edit</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="menu-item-edit-description">
                  <DialogHeader>
                    <DialogTitle>Edit Menu Item</DialogTitle>
                    <DialogDescription id="menu-item-edit-description">
                      Make changes to the menu item details.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={selectedMenuItem?.name} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" defaultValue={selectedMenuItem?.category} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="price">Price</Label>
                      <Input id="price" type="number" step="0.01" defaultValue={selectedMenuItem?.price} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="status">Status</Label>
                      <Input id="status" defaultValue={selectedMenuItem?.status} />
                    </div>
                    <Button type="submit">Update Menu Item</Button>
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

