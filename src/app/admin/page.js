"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AdminPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const loginHandler = (e) => {
    e.preventDefault()
    if (email === 'admin@mlh.com' && password === 'Urct4535') {
      router.push('/admin/properties')
    }
  }

  return (

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-white py-6 sm:py-8 lg:py-12">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

      <form onSubmit={loginHandler} className="mx-auto max-w-lg rounded-lg border">
        <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label for="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div>
            <label for="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <button type="submit" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>


        </div>

      </form>
    </div>

  )
}

export default AdminPage