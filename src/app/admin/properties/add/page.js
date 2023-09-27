import React from 'react'

const NewProperties = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Publier une nouvelle proprièté</h2>
        </div>

        <form class="mx-auto flex flex-col gap-4">
          <div>
            <label for="title" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Titre*</label>
            <input name="title" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div>
            <label for="price" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Prix*</label>
            <input name="price" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div >
            <label for="surface" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Surface*</label>
            <input name="surface" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div >
            <label for="rooms" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Nombre de chambres*</label>
            <input name="rooms" type='number' class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div >
            <label for="bathrooms" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Nombre de salles de bain*</label>
            <input name="bathrooms" type='number' class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>


          <div class="flex items-center justify-between sm:col-span-2">
            <button class="inline-block rounded-md bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

            <span class="text-sm text-gray-500">*Obligatoire</span>
          </div>


        </form>

      </div>
    </div>
  )
}

export default NewProperties