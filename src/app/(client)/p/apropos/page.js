// pages/index.js
import React from 'react';
import Link from 'next/link';

function AboutPage() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <header className="text-4xl font-bold mb-4">Bienvenue sur TrouverMonBien</header>
      <p className="text-lg text-gray-700 mb-8">
        À la recherche de la maison de vos rêves ou d'un investissement immobilier lucratif ? Vous êtes au bon endroit.
      </p>
      <Link className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" href="/">

        Commencer

      </Link>

      {/* Section de mise en avant */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi Choisir TrouverMonBien ?</h2>
        <p className="text-gray-700">
          TrouverMonBien offre une expérience unique pour votre recherche immobilière, avec des avantages tels que :
        </p>
        <ul className="list-disc list-inside text-left mt-4">
          <li>Une vaste sélection de biens immobiliers.</li>
          <li>Un moteur de recherche puissant pour affiner vos critères.</li>
          <li>Des informations détaillées sur chaque propriété.</li>
          <li>Alertes personnalisées pour rester à jour.</li>
          <li>Une équipe d'agents immobiliers expérimentés.</li>
          <li>Une communauté engagée de passionnés immobiliers.</li>
        </ul>
      </section>

      {/* Section de contact */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Nous Contacter</h2>
        <p className="text-gray-700">
          Avez-vous des questions ou avez-vous besoin d'aide dans votre recherche immobilière ? N'hésitez pas à nous contacter !
        </p>
        <Link className="text-blue-500 hover:underline mt-2" href="/p/contact">
          Nous Contacter
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
