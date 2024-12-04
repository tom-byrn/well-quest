'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, TooltipItem,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function WellnessTracker() {
  // Sample data for the wellness stats chart
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Days 1 to 30
    datasets: [
      {
        label: 'Sleep Time (hours)',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 8) + 6), // Random sleep data (hours)
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for sleep and exercise
      },
      {
        label: 'Exercise Time (minutes)',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 60) + 1), // Random exercise time (minutes)
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for sleep and exercise
      },
      {
        label: 'Walking Time (minutes)',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 60) + 20), // Random walking time (minutes)
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for walking time
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: TooltipItem<never>[]) => `Time: ${tooltipItems[0].label}`,
        },
      },
    },
  };

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
            <Button className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">Connect New Device</Button>
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
          <CardTitle className="text-wellness-darkGreen">Your Wellness Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-300 w-full h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
            <Line data={data} options={options} />
          </div>
        </CardContent>
      </Card>

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
          <Button className="mt-4 bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white">Join a Challenge</Button>
        </CardContent>
      </Card>
    </div>
  );
}
