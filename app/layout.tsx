import './globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Employee Wellness Platform',
  description: 'A community platform for employee wellness and events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <MainNav />
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

