import Link from 'next/link'

const CTA = () => {
  return (
    <div className="relative grid place-content-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://www.immomonte-carlo.com/wp-content/uploads/2018/12/Compromis-de-vente.jpg)' }}>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>
      <div className="text-white text-center z-10 px-8 md:px-8 py-24">

        <h2 className="text-2xl font-bold  mb-4">Louer, acheter ou vendre</h2>
        <p className="mb-4 text-sm">Vous cherchez à louer ou à acheter une nouvelle propriété ou à vendre une existante?<br /> L'agence Immo Monte-Carlo fournit une solution facile!</p>
        <div className="grid place-content-center">

          <Link
            href={`/`}
            className="mx-auto text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md inline-block transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA