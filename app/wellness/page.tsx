'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WellnessTracker() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-wellness-darkGreen">Wellness Tracker</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader>
            <CardTitle className="text-wellness-darkGreen">Your Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-wellness-darkGreen">Fitbit Charge 5</li>
              <li className="text-wellness-darkGreen">Apple Health (iPhone)</li>
            </ul>
            <Button className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">
              Connect New Device
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-wellness-lightGreen shadow-md">
          <CardHeader>
            <CardTitle className="text-wellness-darkGreen">Community Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-wellness-darkGreen">Total steps today: 1,234,567</li>
              <li className="text-wellness-darkGreen">Active participants: 132</li>
              <li className="text-wellness-darkGreen">Most active department: Marketing</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-wellness-lightGreen shadow-md">
        <CardHeader>
          <CardTitle className="text-wellness-darkGreen">Wellness Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="text-wellness-darkGreen">30-Day Step Challenge - 5 days remaining</li>
            <li className="text-wellness-darkGreen">Mindfulness Minutes - 15/30 days completed</li>
            <li className="text-wellness-darkGreen">Healthy Sleep Habits - Starting next week</li>
          </ul>
          <Button className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">
            Join a Challenge
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
