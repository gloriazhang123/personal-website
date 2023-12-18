import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { getDictionary } from '../localization/dictionaries'

import '@/styles/tailwind.css'
import { async } from 'fast-glob'

export const metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default:
      'Spencer Sharp - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang)
  global.dict = dict;
  const direction = lang === 'ar-AE' ? 'rtl' : 'ltr';


  return (
    <html lang={lang} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full" dir={direction}>
            
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
