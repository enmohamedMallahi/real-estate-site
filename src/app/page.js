import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Properties from '@/components/Properties'
import PropertySearch from '@/components/PropertySearch'
import OurClients from '@/components/OurClients'


export default async function Home() {
  try {
    const res = await fetch('https://alpha-estate.vercel.app/api/properties')
    const properties = await res.json()

  } catch (err) {
    console.error(err)
  }

  return (
    <>
      {/* <Hero /> */}
      <PropertySearch properties={[]} />
      <section className="px-4">
        <h2 className="text-2xl text-center mb-2 font-bold">Bienvenue dans votre agence <br /> <span className="text-4xl">Immo Monte-Carlo</span></h2>
        <p className="text-center text-gray-500 mb-8">Notre Agence Immo Monte-Carlo vous accompagne dans tous vos projets immobiliers . Nous sommes spécialisés dans la vente, l'achat et la location de tous type de biens (appartements, maisons, villas, garages, terrains, bureaux et locaux commerciaux...) sur rabat et régions.</p>
        <Properties properties={[]} />
      </section>
      <CTA></CTA>
      <OurClients />
    </>
  )
}
