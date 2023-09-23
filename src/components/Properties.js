// components/FeaturedProperties.js
import Link from 'next/link';
import React from 'react';


const Properties = ({ properties }) => {

  return (

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-2 md:px-4 py-8">
      {properties.map((property) => (
        <div key={property.id}  >
          <div className="bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
            <Link className="max-h-[48] overflow-hidden" href={`/property/${ property.id }`}>
              <img src={property?.images?.at(0)} alt={property.title} className="w-full h-full object-cover hover:scale-110 transition duration-100" />
            </Link>
            <div className="p-4">
              <Link href={`/property/${ property.id }`}>
                <h3 className="text-xl font-semibold mb-2 h-6 overflow-hidden">{property.title}</h3>
              </Link>
              <p className="text-gray-600 text-sm mb-2">{property.location}</p>
              <div className="flex justify-between text-gray-800">

                <p>{property.bedrooms} Bed.</p>
                <p>{property.bathrooms} Bath.</p>
                <p>{property.area}</p>

              </div>
              <div className="mt-2">
                <p>Prix: <span className="text-blue-500 font-bold">{property.price} DHs</span></p>
              </div>
              <div className="mt-2">
                <Link
                  href={`/property/${ property.id }`}
                  className="w-full py-2 px-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md inline-block transition duration-300"
                >
                  Voir les details
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
