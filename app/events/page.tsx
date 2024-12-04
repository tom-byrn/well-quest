import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Events() {
  const events = [
    { id: 1, title: "Yoga Class", date: "15/06/2025", time: "17:00", organizer: "HR Department", location: "Gym" },
    { id: 2, title: "Group Hike", date: "17/07/2025", time: "09:00", organizer: "Tom Byrne", location: "Croagh Patrick" },
    { id: 3, title: "Meditation Session", date: "01/08/2025", time: "12:00", organizer: "Wellness Committee", location: "Floor 3 quiet room" },
    { id: 4, title: "5K Run", date: "03/08/2025", time: "18:00", organizer: "Running Club", location: "City square" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>Create New Event</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Organizer: {event.organizer}</p>
              <p>Location: {event.location}</p>
              <Button asChild className="mt-4">
                <Link href={`/events/${event.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

