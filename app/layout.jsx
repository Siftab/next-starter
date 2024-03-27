import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './Components/layout/Header'
// import Footer from './Components/layout/Footer'
// import Footer from '@/app/Components/layout/Footer'
import Footer from '@/components/layout/Footer'
import Providers from './Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
