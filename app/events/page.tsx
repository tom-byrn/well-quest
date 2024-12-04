import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Events() {
  const events = [
    { id: 1, title: "Yoga Class", date: "2023-06-15", time: "17:00", organizer: "HR Department" },
    { id: 2, title: "Group Hike", date: "2023-06-17", time: "09:00", organizer: "John Doe" },
    { id: 3, title: "Meditation Session", date: "2023-06-19", time: "12:00", organizer: "Wellness Committee" },
    { id: 4, title: "5K Run", date: "2023-06-22", time: "18:00", organizer: "Running Club" },
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

