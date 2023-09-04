// components/FeaturedProperties.js

import React from 'react';

const FeaturedProperties = () => {
  // Sample data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: '$1,500,000',
      location: 'Malibu, CA',
      bedrooms: 5,
      bathrooms: 4,
      area: '3,500 sqft',
      image: 'https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Modern Downtown Apartment',
      price: '$800,000',
      location: 'New York, NY',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sqft',
      image: 'https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Countryside Estate with Acreage',
      price: '$2,200,000',
      location: 'Aspen, CO',
      bedrooms: 6,
      bathrooms: 5,
      area: '6,000 sqft',
      image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white flex flex-col shadow-lg rounded-lg overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 h-6 overflow-hidden">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between text-gray-800">
                  <div>
                    <p>{property.bedrooms} Bedrooms</p>
                    <p>{property.bathrooms} Bathrooms</p>
                  </div>
                  <p>{property.area}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={`#property/${ property.id }`} // Replace with the actual property detail link
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
