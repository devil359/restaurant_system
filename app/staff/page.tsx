import { MainLayout } from '@/components/layout/main-layout'
import { StaffList } from '@/components/staff/staff-list'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewStaffForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter staff name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="position">Position</Label>
        <Input id="position" placeholder="Enter position" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="shift">Shift</Label>
        <Input id="shift" placeholder="Enter shift" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Enter phone number" />
      </div>
      <Button type="submit">Add Staff Member</Button>
    </form>
  )
}

export default function StaffPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Staff</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Staff</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
              </DialogHeader>
              <NewStaffForm />
            </DialogContent>
          </Dialog>
        </div>
        <StaffList />
      </div>
    </MainLayout>
  )
}

