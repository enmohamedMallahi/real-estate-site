// pages/property/[id].js
import ImageSlider from "@/components/ImageSlider";


export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'

const PropertyDetailPage = async ({ params }) => {
  let property = {};
  try {
    const res = await fetch('https://alpha-estate.vercel.app/api/properties/' + params.id)
    property = await res.json()
    // console.log(property)
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
          <div className="">
            {/* Property Name */}
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{property?.title}</h2>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-lg italic font-bold text-blue-500 md:text-2xl">{property?.price} DHs</span>
            </div>

            {/* Description */}
            <div className="mb-4">
              <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, aliquid.</p>
            </div>

            {/* More Property Info */}
            <div className="mb-4">
              <div className="mb-2 text-lg font-semibold text-gray-800">Property Details</div>
              <ul className="text-gray-500">
                <li>Location: {property?.location}</li>
                <li>Bedrooms: {property?.bedrooms}</li>
                <li>Bathrooms: {property?.bathrooms}</li>
                <li>Area: {property?.area}</li>
              </ul>
            </div>

            {/*C CTA Button */}
            <a
              className="w-full inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
              href="#"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

