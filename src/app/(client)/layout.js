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
    <>
      <div className="relative bg-black px-4 py-3 sm:pr-8 md:px-8">
        <p className="text-center text-sm text-white ">This is a section of some simple </p>
      </div>

      <Navbar />
      {children}
      <Footer />
    </>
  )
}
