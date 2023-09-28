// components/FeaturedProperties.js
import Link from 'next/link';
import React from 'react';


const Properties = ({ properties }) => {

  return (

    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-8 py-8 px-4 md:px-8">
      {properties.map((property) => (

        <div key={property.id} className="relative bg-white flex flex-col md:flex-row gap-2 border rounded-lg overflow-hidden">
          <div className="absolute z-10 top-0 left-0 flex gap-1">

            <span className="px-2 py-1 rounded-md bg-black text-white text-xs ">{property.location}</span>
            <span className="px-2 py-1 rounded-md bg-black text-white text-xs">{property.type}</span>
          </div>
          <Link className="max-h-[12rem] md:w-4/12 overflow-hidden" href={`/property/${ property.id }`}>
            <img src={property?.imageUrls?.at(0)} alt={property.title} className="w-full h-full object-cover hover:scale-110 transition duration-100" />
          </Link>
          <div className="md:w-8/12 p-4 flex flex-col justify-center">
            <Link href={`/property/${ property.id }`}>
              <h3 className="text-xl font-semibold mb-2 h-6 overflow-hidden">{property.title}</h3>
            </Link>

            <div className="hidden md:flex gap-4 text-gray-800">

              <p>{property.bedrooms} <span className="text-sm">Chambre</span></p>
              <p>{property.bathrooms} <span className="text-sm">Salle de bain</span></p>

            </div>
            <div className="mt-2">
              <p>Surface: {property.surface}m</p>
              <p>Prix: <span className="text-blue-500 font-bold">{property.price} DHs</span></p>
            </div>
            <div className="mt-2">
              <Link
                href={`/property/${ property.id }`}
                className="w-full md:w-auto py-2 px-4 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md inline-block transition duration-300"
              >
                Voir les details
              </Link>
            </div>
          </div>
        </div>

      ))}
    </div>

  );
};

export default Properties;
