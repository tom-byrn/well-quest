import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WellnessTracker() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Wellness Tracker</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Fitbit Charge 5</li>
              <li>Apple Health (iPhone)</li>
            </ul>
            <Button className="mt-4">Connect New Device</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Total steps today: 1,234,567</li>
              <li>Active participants: 132</li>
              <li>Most active department: Marketing</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Wellness Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-gray-200 flex items-center justify-center">
            [Placeholder for wellness stats chart]
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Wellness Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>30-Day Step Challenge - 5 days remaining</li>
            <li>Mindfulness Minutes - 15/30 days completed</li>
            <li>Healthy Sleep Habits - Starting next week</li>
          </ul>
          <Button className="mt-4">Join a Challenge</Button>
        </CardContent>
      </Card>
    </div>
  )
}

