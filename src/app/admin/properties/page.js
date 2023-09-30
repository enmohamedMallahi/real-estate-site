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
      await deleteProperty(propertyId);
      // Refresh the properties list after deletion
      if (!window.confirm('Vous étes sur?')) return
      const updatedProperties = properties.filter((property) => property.id !== propertyId);
      setProperties(updatedProperties);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div>
      <h1>Admin Properties Page</h1>
      <Link href="/admin/add-property">
        <a>Add New Property</a>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.title}</td>
              <td>{property.location}</td>
              <td>
                <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
                <Link href={`/admin/edit-property/${ property.id }`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProperties;
