// components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-700 to-blue-900 text-white relative py-32 px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Discover Your Dream Home
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Explore our exclusive listings and find the perfect property to call home.
        </p>
        <a
          href="#contact" // Replace with the actual link or scroll-to section
          className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
