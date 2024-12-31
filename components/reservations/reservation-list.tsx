import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const reservations = [
  { id: 1, name: 'John Doe', date: '2023-06-15', time: '19:00', guests: 4, status: 'Confirmed' },
  { id: 2, name: 'Jane Smith', date: '2023-06-16', time: '20:30', guests: 2, status: 'Pending' },
  { id: 3, name: 'Bob Johnson', date: '2023-06-17', time: '18:00', guests: 6, status: 'Confirmed' },
]

export function ReservationList() {
  const [selectedReservation, setSelectedReservation] = useState<typeof reservations[0] | null>(null)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Guests</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reservations.map((reservation) => (
          <TableRow key={reservation.id}>
            <TableCell>{reservation.id}</TableCell>
            <TableCell>{reservation.name}</TableCell>
            <TableCell>{reservation.date}</TableCell>
            <TableCell>{reservation.time}</TableCell>
            <TableCell>{reservation.guests}</TableCell>
            <TableCell>{reservation.status}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedReservation(reservation)}>Edit</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="reservation-edit-description">
                  <DialogHeader>
                    <DialogTitle>Edit Reservation</DialogTitle>
                    <DialogDescription id="reservation-edit-description">
                      Update reservation details and preferences.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={selectedReservation?.name} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" defaultValue={selectedReservation?.date} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" defaultValue={selectedReservation?.time} />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="guests">Guests</Label>
                      <Input id="guests" type="number" defaultValue={selectedReservation?.guests} />
                    </div>
                    <Button type="submit">Update Reservation</Button>
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

