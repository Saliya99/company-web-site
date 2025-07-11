import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Amazoft',
  description: 'Your Reliable BUSINESS SOFTWARE DEVELOPER',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
