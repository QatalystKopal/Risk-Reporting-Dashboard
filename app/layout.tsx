import type { Metadata } from 'next'
import './globals.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'

export const metadata: Metadata = {
  title: 'CarbonControl - Risk Reporting Dashboard',
  description: 'Industrial Intelligence Dashboard for Carbon Credit Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Header />
        <main className="ml-64 pt-24 p-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
