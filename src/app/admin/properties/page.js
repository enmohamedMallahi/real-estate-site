"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  getAllProperties,
  deleteProperty,
} from '@/lib/properties'; // Import your property functions

const AdminProperties = () => {
  const [properties, setProperties] = useState([]);
  const router = useRouter();


  useEffect(() => {
    // Fetch all properties when the component mounts
    async function fetchProperties() {
      const propertiesData = await getAllProperties();
      setProperties(propertiesData);
    }

    fetchProperties();
  }, []);

  const handleDeleteProperty = async (propertyId) => {
    try {
      if (!window.confirm('Are you sure you want to delete this property?')) return;
      await deleteProperty(propertyId);
      // Refresh the properties list after deletion
      const updatedProperties = properties.filter(
        (property) => property.id !== propertyId
      );
      setProperties(updatedProperties);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Liste des proriètés</h2>
        </div>
        <Link href="/admin/properties/add" className="inline-block  bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 transition duration-300">
          Ajouter une proprièté
        </Link>

        <table className="w-full mt-6 bg-white shadow-md rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Surface</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{property.title}</td>
                <td className="py-3 px-4">{property.location}</td>
                <td className="py-3 px-4">{property.surface} m²</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => handleDeleteProperty(property.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/admin/properties/${ property.id }`}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProperties;
