import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const staffMembers = [
  { id: 1, name: 'John Doe', position: 'Waiter', shift: 'Morning', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', position: 'Chef', shift: 'Evening', phone: '987-654-3210' },
  { id: 3, name: 'Bob Johnson', position: 'Manager', shift: 'Full-time', phone: '456-789-0123' },
]

export function StaffList() {
  const [selectedStaff, setSelectedStaff] = useState<typeof staffMembers[0] | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Shift</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {staffMembers.map((staff) => (
          <TableRow key={staff.id}>
            <TableCell>{staff.id}</TableCell>
            <TableCell>{staff.name}</TableCell>
            <TableCell>{staff.position}</TableCell>
            <TableCell>{staff.shift}</TableCell>
            <TableCell>{staff.phone}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedStaff(staff)}>Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Staff Member</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={selectedStaff?.name} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="position">Position</Label>
                      <Input id="position" defaultValue={selectedStaff?.position} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="shift">Shift</Label>
                      <Input id="shift" defaultValue={selectedStaff?.shift} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={selectedStaff?.phone} />
                    </div>
                    <Button type="submit">Update Staff Member</Button>
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

