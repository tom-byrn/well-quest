import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Leaderboard() {
  const leaderboardData = [
    { team: "Marketing", steps: 182345 },
    { team: "Finance", steps: 170210 },
    { team: "HR", steps: 160876 },
    { team: "Sales", steps: 158430 },
    { team: "Software Development", steps: 145210 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Team Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Rank</th>
                <th className="border border-gray-300 px-4 py-2">Team</th>
                <th className="border border-gray-300 px-4 py-2">Steps</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((team, index) => (
                <tr key={team.team}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{team.team}</td>
                  <td className="border border-gray-300 px-4 py-2">{team.steps.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
