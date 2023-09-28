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
      <section className="px-4 py-8 md:px-8  border">
        <h2 className="text-2xl text-center mb-2 font-bold">Bienvenue dans votre agence <br /> <span className="text-4xl">Immo Monte-Carlo</span></h2>
        <p className="text-center text-gray-500">Notre Agence Immo Monte-Carlo vous accompagne dans tous vos projets immobiliers . Nous sommes spécialisés dans la vente, l'achat et la location de tous type de biens (appartements, maisons, villas, garages, terrains, bureaux et locaux commerciaux...) sur rabat et régions.</p>
      </section>
      <Properties properties={properties} />
      <CTA />
      <Footer />
    </>
  )
}
