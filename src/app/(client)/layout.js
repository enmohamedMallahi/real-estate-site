import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TrouverMonBien',
  description: 'À la recherche de la maison de vos rêves ou d\'un investissement immobilier lucratif? Vous êtes au bon endroit.TrouverMonBien vous connecte aux meilleures opportunités immobilières en un seul endroit pratique.',
  keywords: 'studio, appartement, immobilier, appartement a louer, maison a vendre, vente immobilière, agence immobilière, appartement a vendre, avito immobilier, avito appartement, maison a vendre, agent immobilier, villa a vendre'
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
