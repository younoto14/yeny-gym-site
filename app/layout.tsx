import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Yeny Gym Fitness | Premium Fitness in Beylikduzu, Istanbul',
  description: 'Transform your body at Yeny Gym Fitness. Premium equipment, expert trainers, and world-class facilities including sauna, Pilates, yoga, and dedicated women\'s area in Beylikduzu, Istanbul.',
  keywords: ['gym', 'fitness', 'Beylikduzu', 'Istanbul', 'workout', 'personal training', 'yoga', 'pilates', 'sauna'],
  authors: [{ name: 'Yeny Gym Fitness' }],
  openGraph: {
    title: 'Yeny Gym Fitness | Premium Fitness in Beylikduzu',
    description: 'Transform your body at Yeny Gym Fitness. Premium equipment, expert trainers, and world-class facilities.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF5F00',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
