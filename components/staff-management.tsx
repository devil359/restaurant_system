'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface StaffMember {
  id: number
  name: string
  position: string
  availability: string
}

export function StaffManagement() {
  const [staff, setStaff] = useState<StaffMember[]>([
    { id: 1, name: 'John Doe', position: 'Waiter', availability: 'Mon-Fri, 9AM-5PM' },
    { id: 2, name: 'Jane Smith', position: 'Chef', availability: 'Tue-Sat, 2PM-10PM' },
    { id: 3, name: 'Mike Johnson', position: 'Bartender', availability: 'Wed-Sun, 4PM-12AM' },
  ])

  const [newStaff, setNewStaff] = useState<Omit<StaffMember, 'id'>>({
    name: '',
    position: '',
    availability: '',
  })

  const addStaff = () => {
    if (newStaff.name && newStaff.position && newStaff.availability) {
      setStaff([...staff, { ...newStaff, id: Date.now() }])
      setNewStaff({ name: '', position: '', availability: '' })
    }
  }

  const deleteStaff = (id: number) => {
    setStaff(staff.filter((member) => member.id !== id))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Staff Management</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Staff
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Staff Member</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Position
              </Label>
              <Input
                id="position"
                value={newStaff.position}
                onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="availability" className="text-right">
                Availability
              </Label>
              <Input
                id="availability"
                value={newStaff.availability}
                onChange={(e) => setNewStaff({ ...newStaff, availability: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={addStaff}>Add Staff Member</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staff.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.position}</TableCell>
              <TableCell>{member.availability}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm" onClick={() => deleteStaff(member.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

