import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-wellness-darkGreen">Welcome to the Wellness Hub</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-wellness-darkGreen">Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-wellness-darkGreen">12</div>
          </CardContent>
        </Card>
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-wellness-darkGreen">Active Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-wellness-darkGreen">132</div>
          </CardContent>
        </Card>
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-wellness-darkGreen">Avg. Steps/Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-wellness-darkGreen">8,421</div>
          </CardContent>
        </Card>
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-wellness-darkGreen">Wellness Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-wellness-darkGreen">78%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader>
            <CardTitle className="text-wellness-darkGreen">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/events/1" className="text-wellness-darkGreen hover:underline">Yoga Class - Tomorrow, 5 PM</Link>
              </li>
              <li>
                <Link href="/events/2" className="text-wellness-darkGreen hover:underline">Group Hike - Saturday, 9 AM</Link>
              </li>
              <li>
                <Link href="/events/3" className="text-wellness-darkGreen hover:underline">Meditation Session - Monday, 12 PM</Link>
              </li>
            </ul>
            <Button asChild className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">
              <Link href="/events">View All Events</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader>
            <CardTitle className="text-wellness-darkGreen">Your Wellness Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-wellness-darkGreen">Steps today: 6,234</li>
              <li className="text-wellness-darkGreen">Active minutes: 45</li>
              <li className="text-wellness-darkGreen">Sleep last night: 7h 23m</li>
            </ul>
            <Button asChild className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">
              <Link href="/wellness">View Detailed Stats</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
