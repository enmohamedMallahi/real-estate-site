import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Real Estate Site',
  description: 'Created by Mohamed Mallahi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <div class="relative bg-black px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
          <p class="text-center inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a section of some simple </p>
        </div>


        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
