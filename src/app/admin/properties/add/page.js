"use client"
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { addProperty } from '@/lib/properties';


const NewProperties = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    surface: '',
    rooms: '',
    bathrooms: '',
    description: '',
    location: 'Roches Noires',
    type: 'appartement',
    buyOrRent: 'buy ',
    images: [], // Store an array of image files
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const updatedValue = type === 'file' ? Array.from(files) : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrls = [];

      // Upload multiple images to Firebase Storage
      for (const imageFile of formData.images) {
        const imageRef = ref(storage, `images/${ imageFile.name }`);
        await uploadBytes(imageRef, imageFile);

        // Get the download URL for the uploaded image
        const imageUrl = await getDownloadURL(imageRef);
        imageUrls.push(imageUrl);
      }

      // Create a new property document in Firestore with the image URLs
      const propertyData = {
        title: formData.title,
        price: parseFloat(formData.price),
        surface: parseFloat(formData.surface),
        rooms: parseInt(formData.rooms),
        bathrooms: parseInt(formData.bathrooms),
        description: formData.description,
        location: formData.location,
        type: formData.type,
        imageUrls: imageUrls,
        buyOrRent: formData.buyOrRent
      };

      await addProperty(propertyData);

      // Clear form data
      setFormData({
        title: '',
        price: '',
        surface: '',
        rooms: '',
        bathrooms: '',
        description: '',
        location: 'Roches Noires',
        type: 'appartement',
        buyOrRent: 'buy ',
        images: [],
      });

      // Handle success or redirect to a success page
      alert('Property added successfully!');
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };



  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Publier une nouvelle proprièté</h2>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
          <div>
            <label htmlFor="title" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Titre*
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label htmlFor="price" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Prix*
            </label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label htmlFor="surface" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Surface*
            </label>
            <input
              name="surface"
              value={formData.surface}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label htmlFor="rooms" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Nombre de chambres*
            </label>
            <input
              name="rooms"
              type="number"
              value={formData.rooms}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label htmlFor="bathrooms" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Nombre de salles de bain*
            </label>
            <input
              name="bathrooms"
              type="number"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>


          <div>
            <label htmlFor="location" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Region*
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="Roches Noires">Roches Noires</option>
              <option value="Mers Sultan">Mers Sultan</option>
              <option value="Ain Sbaa">Ain Sbaa</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Type*
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="appartement">Appartement</option>
              <option value="studio">Studio</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Acheter/louer*
            </label>
            <select
              name="type"
              value={formData.buyOrRent}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="buy">Acheter</option>
              <option value="rental">Louer</option>
            </select>
          </div>

          <div>
            <label htmlFor="images" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Images*
            </label>
            <input
              type="file"
              name="images"
              multiple // Allow multiple file selection
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button type="submit" className="inline-block rounded-md bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

            <span className="text-sm text-gray-500">*Obligatoire</span>
          </div>


        </form>

      </div>
    </div>
  )
}

export default NewProperties