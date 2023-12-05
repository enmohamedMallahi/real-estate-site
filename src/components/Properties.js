// components/FeaturedProperties.js
import Link from 'next/link';

const Properties = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 py-8 px-4 md:px-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="relative bg-white border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          <Link href={`/property/${ property.id }`} className="block h-56 md:h-64 lg:h-72 overflow-hidden">
            <img
              src={property?.imageUrls?.at(0)}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </Link>
          <div className="p-4">
            <Link href={`/property/${ property.id }`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 line-clamp-2 hover:underline">
                {property.title}
              </h3>
            </Link>

            <div className="flex items-center gap-2 md:gap-4 text-gray-800">
              <p>
                <span className="text-sm">Chambres:</span> {property.rooms}
              </p>
              <p>
                <span className="text-sm">Salles de bain:</span> {property.bathrooms}
              </p>
            </div>
            <div className="mt-2">
              <p>Surface: {property.surface}m²</p>
              <p>
                Prix: <span className="text-blue-500 font-bold">{property.price} DHs</span>
              </p>
            </div>
            <div className="mt-4">
              <Link
                href={`/property/${ property.id }`}
                className="block w-full py-2 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:border-blue-300"
              >
                Voir les détails
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;
