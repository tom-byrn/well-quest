import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function YogaClassEvent() {
  const event = {
    id: 1,
    title: "Yoga Class",
    date: "15/06/2025",
    time: "17:00",
    organizer: "HR Department",
    teacher: "Emer O'Connor",
    location: "UL Arena Gym",
    locationCoordinates: "52.6734034,-8.5655026", // Example coordinates for San Francisco
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{event.title}</h1>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <p className="text-lg font-semibold">Date: {event.date}</p>
              <p className="text-lg font-semibold">Time: {event.time}</p>
              <p className="text-lg font-semibold">Organizer: {event.organizer}</p>
              <p className="text-lg font-semibold">Teacher: {event.teacher}</p>
              <p className="text-lg font-semibold">Location: {event.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[300px]">
          <iframe
                src={`https://www.google.com/maps?q=${event.locationCoordinates}&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>

          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button>
          <Link href="/events">Back to Events</Link>
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Add to Calendar
        </Button>
      </div>
    </div>
  );
}
