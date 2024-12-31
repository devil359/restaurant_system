import { MainLayout } from '@/components/layout/main-layout'
import { ReservationList } from '@/components/reservations/reservation-list'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function NewReservationForm() {
  return (
    <form className="space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter customer name" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="time">Time</Label>
        <Input id="time" type="time" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="guests">Guests</Label>
        <Input id="guests" type="number" placeholder="Number of guests" />
      </div>
      <Button type="submit">Create Reservation</Button>
    </form>
  )
}

export default function ReservationsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Reservations</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>New Reservation</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Reservation</DialogTitle>
              </DialogHeader>
              <NewReservationForm />
            </DialogContent>
          </Dialog>
        </div>
        <ReservationList />
      </div>
    </MainLayout>
  )
}

