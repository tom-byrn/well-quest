import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="john.doe@example.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="department">Department</Label>
              <Input type="text" id="department" placeholder="Marketing" />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="event-notifications" />
              <Label htmlFor="event-notifications">Receive event notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="wellness-updates" />
              <Label htmlFor="wellness-updates">Receive wellness updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="challenge-reminders" />
              <Label htmlFor="challenge-reminders">Receive challenge reminders</Label>
            </div>
            <Button type="submit">Save Preferences</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

