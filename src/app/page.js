import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Properties from '@/components/Properties'
import PropertySearch from '@/components/PropertySearch'

// export const fetchCache = 'force-no-store'
export const revalidate = 60 // seconds
// export const dynamic = 'force-dynamic'

export default async function Home() {
  let properties = [];
  try {
    let res = await fetch('https://admin.trouvermonbien.com/api/properties')
    properties = await res.json()
    console.log(properties);

  } catch (err) {
    console.error(err)
  }

  return (
    <>
      <Navbar />
      <PropertySearch />
      <section className="px-4 py-8 md:px-8  ">
        <h1 className="text-4xl text-center font-bold">Bienvenue sur Trouver Mon Bien</h1 >
        <p className="text-2xl text-center mb-2">Votre portail ultime pour l'immobilier !</p>
        <p className="text-center text-gray-500">À la recherche de l'appartement de vos rêves ou d'un investissement immobilier ? Vous êtes au bon endroit. <strong className="font-bold">Trouver Mon Bien</strong> vous connecte aux meilleures opportunités immobilières en un seul endroit professionel. Notre comptoire immobilier vous offre un accès facile aux biens immobiliers les plus recherchés.</p>
      </section>
      <Properties properties={properties} />
      <CTA />
      <Footer />
    </>
  )
}
