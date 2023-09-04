// components/FeaturedProperties.js
import Link from 'next/link';
import React from 'react';

const Properties = ({ properties }) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8">
      {properties.map((property) => (
        <div key={property.id}  >
          <div className="bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
            <Link href={`/property/${ property.id }`}>
              <img src={property?.images?.at(0)} alt={property.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <Link href={`/property/${ property.id }`}>
                <h3 className="text-xl font-semibold mb-2 h-6 overflow-hidden">{property.title}</h3>
              </Link>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <div className="flex justify-between text-gray-800">
                <div>
                  <p>{property.bedrooms} Bedrooms</p>
                  <p>{property.bathrooms} Bathrooms</p>
                </div>
                <p>{property.area}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/property/${ property.id }`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Properties;
