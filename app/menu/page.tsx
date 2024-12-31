import { MainLayout } from '@/components/layout/main-layout'
import { MenuList } from '@/components/menu/menu-list'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewMenuItemForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter item name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="category">Category</Label>
        <Input id="category" placeholder="Enter category" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" placeholder="Enter price" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="status">Status</Label>
        <Input id="status" placeholder="Enter status" />
      </div>
      <Button type="submit">Add Menu Item</Button>
    </form>
  )
}

export default function MenuPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Menu</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Menu Item</DialogTitle>
              </DialogHeader>
              <NewMenuItemForm />
            </DialogContent>
          </Dialog>
        </div>
        <MenuList />
      </div>
    </MainLayout>
  )
}

