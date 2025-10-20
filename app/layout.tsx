import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Laboratory',
  description: 'AI and Computer Science Research Lab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-offwhite min-h-screen">
        <nav className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-headline">Research Lab</a>
              <div className="flex gap-6">
                <a href="/about" className="hover:text-neonTeal transition-colors">About</a>
                <a href="/admin" className="hover:text-neonTeal transition-colors">Admin</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
