// pages/index.js
import React from 'react';
import Link from 'next/link';

function AboutPage() {
  return (
    <div className="px-4 md:px-8 py-8">

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qui sommes-nous ?</h2>
        {/* Paragraphe "Qui sommes-nous ?" */}
        <p className="text-gray-700">
          TrouverMonBien est une équipe passionnée d'experts immobiliers dédiés à vous aider à trouver la propriété parfaite. Avec des années d'expérience, nous sommes votre partenaire de confiance pour toutes vos aspirations immobilières.
        </p>
      </section>

      {/* Section de mise en avant */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Pourquoi Choisir Trouver Mon Bien ?</h2>
        <p className="text-gray-700">
          Trouver Mon Bien offre une expérience unique pour votre recherche immobilière, avec des avantages tels que :
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
      <section className="mb-4 ">
        <h2 className="text-2xl font-bold mb-2">Nous Contacter</h2>
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
