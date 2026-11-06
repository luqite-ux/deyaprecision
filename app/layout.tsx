import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { defaultLocale } from '@/lib/i18n'
import {cookies} from 'next/headers'
import {nav} from '@/data/en/site'
import {editableNavigation,loadPublicSiteContent} from '@/lib/site-content/home'
import {PREVIEW_COOKIE} from '@/lib/site-content/site-content'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://deyaprecision.com'),
  title: {
    default: 'DEYA Precision | Precision-Machined Components, Suzhou',
    template: '%s | DEYA Precision',
  },
  description:
    'Suzhou Deya Precision Technology Co., Ltd. machines precision components for liquid-cooling systems, semiconductor equipment, medical applications and non-standard automation. Send your drawing for a quotation.',
  applicationName: 'DEYA Precision',
  openGraph: {
    type: 'website',
    siteName: 'DEYA Precision',
    title: 'DEYA Precision | Precision-Machined Components, Suzhou',
    description:
      'CNC turning, turn-mill and vertical machining for liquid-cooling, semiconductor, medical and automation components.',
    url: 'https://deyaprecision.com',
    images: [{ url: '/images/banners/banner-03.jpg' }],
  },
  icons: {
    icon: [{ url: '/icon.jpg', type: 'image/jpeg' }],
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f2a63',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const snapshot=await loadPublicSiteContent()
  const preview=(await cookies()).has(PREVIEW_COOKIE)
  return (
    <html lang={defaultLocale} className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Organization','@id':'https://deyaprecision.com/#organization',name:'Suzhou Deya Precision Technology Co., Ltd.',url:'https://deyaprecision.com',logo:'https://deyaprecision.com/logo.jpg',email:'info@deyaprecision.com',telephone:'+86 189 1408 8662',address:{'@type':'PostalAddress',streetAddress:'No. 21, Edong Industrial Park, Beiqiao Town, Xiangcheng District',addressLocality:'Suzhou',addressRegion:'Jiangsu',addressCountry:'CN'} }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'WebSite','@id':'https://deyaprecision.com/#website',url:'https://deyaprecision.com',name:'DEYA Precision',publisher:{'@id':'https://deyaprecision.com/#organization'} }) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {preview?<aside className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-950">Preview mode · changes are not public <form action="/api/site-content/exit-preview" method="post" className="ml-3 inline"><button type="submit" className="underline">Exit preview</button></form></aside>:null}
        <SiteHeader items={editableNavigation(snapshot,nav)} />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && !preview && <Analytics />}
      </body>
    </html>
  )
}
