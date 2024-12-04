import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Profile() {
  // Example user information (this can come from props, context, or API in real implementation)
  const userInfo = {
    name: "David Moore",
    email: "david.moore@amphibian.ie",
    department: "Software Development",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label>Name</Label>
              <p className="text-lg font-semibold">{userInfo.name}</p>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Email</Label>
              <p className="text-lg font-semibold">{userInfo.email}</p>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Department</Label>
              <p className="text-lg font-semibold">{userInfo.department}</p>
            </div>
          </div>
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
  );
}
