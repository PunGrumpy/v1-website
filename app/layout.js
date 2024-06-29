import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ColorModeScript } from '@chakra-ui/react'
import Providers from '@/components/providers'
import MainLayout from '@/components/layout/main'
import { fonts } from '@/components/fonts'

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata = {
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
    url: '/',
    title: 'PunGrumpy - Website',
    description: 'A personal website for PunGrumpy.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
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
        width: 1200,
        height: 630,
        alt: 'PunGrumpy - Website'
      }
    ],
    site: '@pungrumpy'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.mplus.variable}>
      <body>
        <Providers>
          <ColorModeScript initialColorMode="system" />
          <MainLayout>{children}</MainLayout>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
