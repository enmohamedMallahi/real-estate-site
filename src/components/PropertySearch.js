"use client"

import React, { useState } from 'react';
import Properties from '@/components/Properties'


const PropertySearch = ({ properties }) => {
  const [filters, setFilters] = useState({
    reference: '',
    buyOrRent: 'all',
    propertyType: 'all',
    neighborhood: 'all',
  });
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearchClick = () => {
    const filteredProperties = properties.filter((property) => {
      return (
        (filters.reference === '' || property.reference.includes(filters.reference)) &&
        (filters.buyOrRent === 'all' || property.buyOrRent === filters.buyOrRent) &&
        (filters.propertyType === 'all' || property.propertyType === filters.propertyType) &&
        (filters.neighborhood === 'all' || property.neighborhood === filters.neighborhood)
      );
    });

    setFilteredProperties(filteredProperties);
  };

  return (
    <>
      {/* FORM */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-700 to-blue-900 text-white relative py-12 px-4">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative text-white z-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Trouver Votre Nouvelle Proprièté</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Réference:</label>
              <input
                type="text"
                name="reference"
                placeholder="REF-xxxx"
                value={filters.reference}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-700 text-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Acheter/Louer:</label>
              <select
                name="buyOrRent"
                value={filters.buyOrRent}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-700 text-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="all">Tous</option>
                <option value="buy">Acheter</option>
                <option value="rental">Louer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Type:</label>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-700 text-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="all">Tous</option>
                <option value="apartment">Apartement</option>
                <option value="office_apartment">Appartement burreau</option>
                <option value="furnished_apartment">Appartement complèt</option>
                {/* Add more property types */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Zone:</label>
              <select
                name="neighborhood"
                value={filters.neighborhood}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-700 text-slate-700 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="all">All</option>
                <option value="Agdal">Agdal</option>
                <option value="neighborhood2">Zone 1</option>
                <option value="neighborhood3">Zone 2</option>
                {/* Add more neighborhoods */}
              </select>
            </div>
            <div className="col-span-2 md:col-span-4">
              <button
                onClick={handleSearchClick}
                className="mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-100  w-full"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* SEARCH RESULTS */}
      <div className="container mx-auto py-8 ">
        <h3 className="text-2xl font-semibold mb-4 text-center">Search Results</h3>
        {/* Render your property listings here */}
        {filteredProperties.length > 0 ? (
          <Properties properties={filteredProperties} />) : (
          // Render a message when there are no search results
          <p className="text-center">No matching properties found.</p>
        )}
      </div>
    </>
  );
};

export default PropertySearch;
