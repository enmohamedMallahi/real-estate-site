"use client"
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSiteSettings, updateSiteSettings } from '@/lib/settings'; // Import your site settings functions

const SiteSettings = () => {
  const [settings, setSettings] = useState({});
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    // Fetch the site settings when the component mounts
    async function fetchSettings() {
      const settingsData = await getSiteSettings();
      setSettings(settingsData);
      setFormData(settingsData);
    }

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update the site settings
      await updateSiteSettings(formData);
      alert('Changements accepetés avec succès.')
    } catch (error) {
      console.error('Error updating site settings:', error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">

      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Modifier les paramètre du site</h2>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">

        <div>
          <label htmlFor="contactNumber" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Numéro de contact*
          </label>
          <input
            name="contactNumber"
            value={formData?.contactNumber || ''}
            onChange={handleChange}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>


        <div className="flex items-center justify-between sm:col-span-2">


          <button type="submit" className="inline-block rounded-md bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
            {isLoading ? 'Loading...' : 'Sauvegarder'}
          </button>

          <span className="text-sm text-gray-500">*Obligatoire</span>
        </div>
      </form>
    </div>
  );
};

export default SiteSettings;
