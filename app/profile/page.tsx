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
      <h1 className="text-3xl font-bold text-wellness-darkGreen">Your Profile</h1>

      <Card className="bg-wellness-lightGreen shadow-md">
        <CardHeader>
          <CardTitle className="text-wellness-darkGreen">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-wellness-darkGreen">Name</Label>
              <p className="text-lg font-semibold text-wellness-darkGreen">{userInfo.name}</p>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-wellness-darkGreen">Email</Label>
              <p className="text-lg font-semibold text-wellness-darkGreen">{userInfo.email}</p>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-wellness-darkGreen">Department</Label>
              <p className="text-lg font-semibold text-wellness-darkGreen">{userInfo.department}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-wellness-lightGreen shadow-md">
        <CardHeader>
          <CardTitle className="text-wellness-darkGreen">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="event-notifications" />
              <Label htmlFor="event-notifications" className="text-wellness-darkGreen">Receive event notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="wellness-updates" />
              <Label htmlFor="wellness-updates" className="text-wellness-darkGreen">Receive wellness updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="challenge-reminders" />
              <Label htmlFor="challenge-reminders" className="text-wellness-darkGreen">Receive challenge reminders</Label>
            </div>
            <Button type="submit" className="bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">Save Preferences</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
