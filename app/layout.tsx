import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">My Blog</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t bg-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            © 2024 My Blog. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  )
}
