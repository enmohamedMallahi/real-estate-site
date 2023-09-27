import Properties from '@/components/Properties'

const SearchPage = async ({ searchParams }) => {
  const { buyOrRent, type, location } = searchParams
  const res = await fetch(`https://alpha-estate.vercel.app/api/properties?buyOrRent=${ buyOrRent }&type=${ type }&location=${ location }`)
  const properties = await res.json()
  return (

    <div className="container mx-auto py-8 ">
      <h3 className="text-2xl font-semibold mb-4 text-center">Résultats de recherche</h3>
      {/* Render your property listings here */}
      {properties.length > 0 ? (
        <Properties properties={properties} />) : (
        // Render a message when there are no search results
        <p className="text-center">Aucune proprièté n'était trouvé</p>
      )}
    </div>
  )
}

export default SearchPage