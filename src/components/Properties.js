// components/FeaturedProperties.js
import Link from 'next/link';
import React from 'react';

const Properties = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-8 py-8 px-4 md:px-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="relative bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <Link href={`/property/${ property.id }`} className="overflow-hidden">
            <img
              src={property?.imageUrls?.at(0)}
              alt={property.title}
              className="w-full h-72 object-cover"
            />
          </Link>
          <div className="p-4">
            <Link href={`/property/${ property.id }`}>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:underline">
                {property.title}
              </h3>
            </Link>

            <div className="flex gap-4 text-gray-800">
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
                className="block w-full py-2 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md transition-colors duration-300"
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
