import './globals.css'

import { ColorModeScript } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { fonts } from '@/components/fonts'
import MainLayout from '@/components/layout/main'
import { NewWorkOverlay } from '@/components/new-work-overlay'
import Providers from '@/components/providers'

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_METADATA_BASE || 'https://v1.pungrumpy.com'
  ),
  title: {
    default: 'PunGrumpy - Website',
    template: '%s - Noppakorn Kaewsalabnil'
  },
  description: 'A personal website for PunGrumpy.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/logo.png'
  },
  robots: 'index, follow',
  openGraph: {
    site_name: 'PunGrumpy',
    url: 'https://pungrumpy.com',
    title: 'PunGrumpy - Website',
    description: 'A personal website for PunGrumpy.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1920,
        height: 1080,
        alt: 'PunGrumpy - Website'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PunGrumpy - Website',
    description: 'A personal website for PunGrumpy.',
    images: [
      {
        url: '/twitter-card.png',
        width: 1920,
        height: 500,
        alt: 'PunGrumpy - Website'
      }
    ],
    site: '@pungrumpy'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.mplus.variable}>
        <Providers>
          <ColorModeScript initialColorMode="system" />
          <MainLayout>
            {children}
            <NewWorkOverlay />
          </MainLayout>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
