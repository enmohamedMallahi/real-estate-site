// pages/property/[id].js
import ImageSlider from "@/components/ImageSlider";
import { getSingleProperty } from "@/lib/properties";


export const revalidate = 0 // seconds

export const generateMetadata = async ({ params }) => {
  const property = await getSingleProperty(params.id)
  return {
    title: property.title,
    description: property.description
  }
}

const PropertyDetailPage = async ({ params }) => {
  let property = {};

  try {
    property = await getSingleProperty(params.id)
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
          <ImageSlider images={property?.imageUrls} />

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
              <p className="text-gray-500">{property?.description}</p>
            </div>

            {/* More Property Info */}
            <div className="mb-4">
              <div className="mb-2 text-lg font-semibold text-gray-800">Property Details</div>
              <ul className="text-gray-500">
                <li>Type: {property?.type}</li>
                <li>Région: {property?.location}</li>
                <li>Chambres: {property?.rooms}</li>
                <li>Salles de bain: {property?.bathrooms}</li>
                <li>Surface: {property?.surface}</li>
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
        </div >
      </div >
    </div>
  );
};

export default PropertyDetailPage;

