import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from './components/spinnavbar'
import Footer from './components/footer'
import {Providers} from './providers'

const inter = Inter({subsets: ['latin']})
export const metadata = {
  title: 'Andrew R. Clark Website',
  description: 'Boston College Student, Software Engineer, Web Devevloper, System Administrator, Programmer, DeFi, Blogger, SEO Optimization',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
