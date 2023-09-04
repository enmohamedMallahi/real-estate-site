import Hero from '@/components/Hero'
import Properties from '@/components/Properties'
import PropertySearch from '@/components/PropertySearch'

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/properties')
  const properties = await res.json()

  return (
    <>
      {/* <Hero /> */}
      <PropertySearch properties={properties} />
      <section>
        <h2 className="text-2xl text-center mb-4 font-bold">Featured Properties</h2>
        <Properties properties={properties} />
      </section>

    </>
  )
}
