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


        <div class="relative bg-black px-4 py-3 sm:pr-8 md:px-8">
          <p class="text-center text-sm text-white ">This is a section of some simple </p>
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
