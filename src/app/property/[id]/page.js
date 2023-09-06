// pages/property/[id].js
import ImageSlider from "@/components/ImageSlider";


export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'

const PropertyDetailPage = async ({ params }) => {
  try {
    const res = await fetch('https://alpha-estate.vercel.app/api/properties/' + params.id)
    const property = await res.json()
    console.log(property)
  } catch (err) {
    console.error(err);
  }


  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Images */}
          {/* <div className="space-y-4">
            {property?.images?.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg bg-gray-100">
                <img src={image} loading="lazy" alt={`Image ${ index + 1 }`} className="h-full w-full object-cover object-center" />
              </div>
            ))}
          </div> */}
          <ImageSlider images={property?.images} />

          {/* Property Info */}
          <div className="md:py-8">
            {/* Property Name */}
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{property?.title}</h2>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">{property?.price}</span>
            </div>

            {/* Description */}
            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, aliquid.</p>
            </div>

            {/* More Property Info */}
            <div className="mt-6">
              <div className="mb-2 text-lg font-semibold text-gray-800">Property Details</div>
              <ul className="text-gray-500">
                <li>Location: {property?.location}</li>
                <li>Bedrooms: {property?.bedrooms}</li>
                <li>Bathrooms: {property?.bathrooms}</li>
                <li>Area: {property?.area}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

