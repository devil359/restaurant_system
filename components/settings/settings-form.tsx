import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'

export function SettingsForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Restaurant Information</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Restaurant Name</Label>
          <Input type="text" id="name" placeholder="Enter restaurant name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter restaurant address" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" placeholder="Enter phone number" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Operating Hours</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="openTime">Opening Time</Label>
          <Input type="time" id="openTime" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="closeTime">Closing Time</Label>
          <Input type="time" id="closeTime" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex items-center space-x-2">
          <Switch id="email-notifications" />
          <Label htmlFor="email-notifications">Email Notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="sms-notifications" />
          <Label htmlFor="sms-notifications">SMS Notifications</Label>
        </div>
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}

