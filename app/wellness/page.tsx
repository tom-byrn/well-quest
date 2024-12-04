'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, TooltipItem,
} from 'chart.js'

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function WellnessTracker() {
  // Sample data for the wellness stats chart

  const data = {

    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Days 1 to 30

    datasets: [
      {
        label: 'Sleep Time (hours)',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        data: Array.from({ length: 24 * 30 }, (_, i) => Math.floor(Math.random() * 8) + 6), // Random sleep data (hours)
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for sleep and exercise
      },
      {
        label: 'Exercise Time (minutes)',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        data: Array.from({ length: 24 * 30 }, (_, i) => Math.floor(Math.random() * 60) + 1), // Random exercise time (hours)
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for sleep and exercise
      },
      {
        label: 'Walking Time (minutes)',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        data: Array.from({ length: 24 * 30 }, (_, i) => Math.floor(Math.random() * 60) + 20), // Random walking time (minutes)
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.3, // Smooth the line
        yAxisID: 'y1', // Use the same axis for walking time
      },
    ],
  }



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
  }

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
            <div className="min-h-300 w-full h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
              <Line data={data} options={options} />
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
