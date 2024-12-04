import Link from 'next/link'
import { Home, Calendar, Activity, User, Trophy } from 'lucide-react'
import Leaderboard from '@/app/leaderboard/page';

export function MainNav() {
  return (
    <nav className="flex flex-col w-64 bg-wellness-lightGreen shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold  text-dark-green">Wellness Hub</h1>
      </div>
      <ul className="space-y-2 py-4">
        <NavItem href="/" icon={<Home className="mr-2 h-4 w-4" />}>Dashboard</NavItem>
        <NavItem href="/events" icon={<Calendar className="mr-2 h-4 w-4" />}>Events</NavItem>
        <NavItem href="/wellness" icon={<Activity className="mr-2 h-4 w-4" />}>Wellness Tracker</NavItem>
        <NavItem href="/leaderboard" icon={<Trophy className="mr-2 h-4 w-4" />}>Leaderboard</NavItem>
        <NavItem href="/profile" icon={<User className="mr-2 h-4 w-4" />}>Profile</NavItem>
      </ul>
    </nav>
  )
}

function NavItem({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="flex items-center px-4 py-2 text-wellness-darkGreen hover:bg-wellness-mediumGreen">
        {icon}
        {children}
      </Link>
    </li>
  )
}

