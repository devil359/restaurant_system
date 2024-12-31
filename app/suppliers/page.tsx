import { MainLayout } from '@/components/layout/main-layout'
import { SupplierList } from '@/components/suppliers/supplier-list'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewSupplierForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter supplier name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="contact">Contact</Label>
        <Input id="contact" placeholder="Enter contact person" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Enter phone number" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email address" />
      </div>
      <Button type="submit">Add Supplier</Button>
    </form>
  )
}

export default function SuppliersPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Suppliers</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Supplier</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Supplier</DialogTitle>
              </DialogHeader>
              <NewSupplierForm />
            </DialogContent>
          </Dialog>
        </div>
        <SupplierList />
      </div>
    </MainLayout>
  )
}

