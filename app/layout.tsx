import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blueyacht',
  description: 'welcome to the best boat sharter in the world',
  other: {
    'theme-color': "#0d1117",
    "color-scheme": "dark only",
    "twitter_image": "https://plus.unsplash.com/premium_photo-1682377521541-36f0ccecd189?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "twitter:card": "sumarry_large_image",
    "og:url": 'commpasevent.no',
    "og:image": "https://plus.unsplash.com/premium_photo-1682377521541-36f0ccecd189?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-black max-w-7xl w-full'>
              <div className='h-20 w-full '></div>
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}