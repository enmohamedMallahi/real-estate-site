// components/FeaturedProperties.js
import Link from 'next/link';
import Image from 'next/image';

const Properties = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 py-8 px-4 md:px-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="relative bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer group"
        >
          <Link href={`/property/${ property.id }`} className="block h-64 overflow-hidden relative">
            <Image
              src={property?.imageUrls?.at(0)}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
          </Link>
          <div className="p-4">
            <Link href={`/property/${ property.id }`}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 line-clamp-2 hover:underline text-gray-900">
                {property.title}
              </h3>
            </Link>

            <div className="flex items-center gap-2 md:gap-4 text-gray-600">
              <p>
                <img src="/bed-icon.svg" alt="Bed Icon" className="inline-block h-4 mr-1" />
                {property.rooms}
              </p>
              <p>
                <img src="/bath-icon.svg" alt="Bath Icon" className="inline-block h-4 mr-1" />
                {property.bathrooms}
              </p>
            </div>
            <div className="mt-2 text-gray-700">
              <p>Surface: {property.surface}m²</p>
              <p>
                Prix: <span className="text-blue-500 font-bold">{property.price} DHs</span>
              </p>
            </div>
            <div className="my-4 w-[90%] absolute bottom-0">
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
