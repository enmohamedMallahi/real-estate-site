"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getSingleProperty,
  editProperty,
} from '@/lib/properties'; // Import your property functions
import { locations, propertyTypes } from '@/lib/utils';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';



const EditProperty = ({ params }) => {
  const [property, setProperty] = useState({});
  const [formData, setFormData] = useState({});
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]); // Array to store image previews
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { id } = params;

  useEffect(() => {
    if (id) {
      // Fetch the property data based on the ID
      async function fetchPropertyData() {
        const propertyData = await getSingleProperty(id);
        setProperty(propertyData);
        setFormData(propertyData);
        setImagePreviews(propertyData.imageUrls || []); // Set initial image previews
      }

      fetchPropertyData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);

    // Create image previews for the selected files
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]); // Append new previews to existing previews
  };


  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();

    try {
      // Update the property data in Firestore
      await editProperty(id, formData);

      // Handle image uploads separately
      if (imageFiles.length > 0) {
        const imageUrls = [];

        // Upload each selected image to Firebase Storage
        for (const imageFile of imageFiles) {
          const storageRef = ref(storage, `property_images/${ id }/${ imageFile.name }`);
          await uploadBytes(storageRef, imageFile);
          const imageUrl = await getDownloadURL(storageRef);
          imageUrls.push(imageUrl);
        }

        // Update the property document with the new image URLs
        await editProperty(id, { imageUrls });
      }
      setIsLoading(false)
      router.push(`/admin/properties/`); // Redirect to the property details page
    } catch (error) {
      console.error('Error editing property:', error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">

      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Modifier une proprièté</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Titre:</label>
          <input
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Prix:</label>
          <input
            type="number"
            name="price"
            value={formData.price || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="surface" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Surface:</label>
          <input
            type="number"
            name="surface"
            value={formData.surface || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="rooms" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Nombre de chambres:</label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="bathrooms" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Nombre de salle de bain:</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description:</label>
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label htmlFor="location" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Region*
          </label>
          <select
            name="location"
            value={formData.location || 'all'}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          >

            {locations.map(location => <option key={location} value={location}>{location}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="type" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Type*
          </label>
          <select
            name="type"
            value={formData.type || 'appartement'}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          >

            {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="type" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Acheter/louer*
          </label>
          <select
            name="type"
            value={formData.buyOrRent || 'buy'}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          >

            <option value="buy">Acheter</option>
            <option value="rental">Louer</option>
          </select>
        </div>

        <div>
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>

        {/* Image previews */}
        <div className="mt-4">
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Image ${ index + 1 }`}
              className="w-32 h-32 mr-2 mb-2 object-cover"
            />
          ))}
        </div>

        <button type="submit" className="inline-block rounded-md bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
          {isLoading ? 'Loading...' : 'Sauvegarder'}
        </button>


      </form>
    </div>
  );
};

export default EditProperty;
