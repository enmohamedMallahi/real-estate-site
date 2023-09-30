import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Properties from '@/components/Properties'
import PropertySearch from '@/components/PropertySearch'
import { getAllProperties } from '@/lib/properties'

// export const fetchCache = 'force-no-store'
export const revalidate = 60 // seconds
// export const dynamic = 'force-dynamic'

export default async function Home() {
  let properties;
  try {
    properties = await getAllProperties()
    console.log(properties);

  } catch (err) {
    console.error(err)
  }

  return (
    <>
      <Navbar />
      <PropertySearch />
      <section className="px-4 py-8 md:px-8  ">
        <h2 className="text-4xl text-center font-bold">Bienvenue sur TrouverMonBien</h2>
        <p className="text-2xl text-center mb-2">Votre portail ultime pour l'immobilier !</p>
        <p className="text-center text-gray-500">À la recherche de la maison de vos rêves ou d'un investissement immobilier lucratif ? Vous êtes au bon endroit. TrouverMonBien vous connecte aux meilleures opportunités immobilières en un seul endroit pratique. Notre répertoire immobilier vous offre un accès facile aux biens immobiliers les plus recherchés dans votre région.</p>
      </section>
      <Properties properties={properties} />
      <CTA />
      <Footer />
    </>
  )
}
