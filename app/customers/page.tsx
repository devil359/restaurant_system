import { MainLayout } from '@/components/layout/main-layout'
import { CustomerList } from '@/components/customers/customer-list'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewCustomerForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter customer name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email address" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Enter phone number" />
      </div>
      <Button type="submit">Add Customer</Button>
    </form>
  )
}

export default function CustomersPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Customers</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Customer</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
              </DialogHeader>
              <NewCustomerForm />
            </DialogContent>
          </Dialog>
        </div>
        <CustomerList />
      </div>
    </MainLayout>
  )
}

