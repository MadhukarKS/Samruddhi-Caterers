import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Instrument_Serif } from 'next/font/google'
import { SmoothScroll } from '@/components/motion/smooth-scroll'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  title: 'Samruddhi Group — Nourishing Trust, Delivering Excellence',
  description:
    "Bengaluru's premier industrial, corporate, institutional and event catering group. 50,000+ meals daily from an ISO 22000 & FSSAI audited central commissary in Jigani.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Samruddhi Group — Nourishing Trust, Delivering Excellence',
    description:
      "Bengaluru's premier industrial, corporate, institutional and event catering group. 50,000+ meals daily from an ISO 22000 & FSSAI audited central commissary in Jigani.",
    url: 'https://samruddhigroup.in',
    siteName: 'Samruddhi Group',
    images: [
      {
        url: '/images/samruddhi-logo.png',
        width: 1024,
        height: 935,
        alt: 'Samruddhi Group Official Emblem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samruddhi Group — Nourishing Trust, Delivering Excellence',
    description:
      "Bengaluru's premier industrial, corporate, institutional and event catering group.",
    images: ['/images/samruddhi-logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#15130f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
