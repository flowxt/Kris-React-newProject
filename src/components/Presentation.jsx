import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageKris from "../images/car3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".fade-in");

    // GSAP Animation pour chaque élément
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Animation en cascade
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Commence lorsque le conteneur entre dans la vue
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-7 px-6 space-y-8 bg-gradient-to-t from-gray-900 via-gray-800 to-grey-700 border-t-4 border-rose-400">
      {/* Titre et Image */}
      <h2 className="text-3xl font-bold text-gray-800 fade-in">Kris</h2>
      <p className="text-lg text-rose-600 fade-in">
        Thérapeute Holistique et Énergétique
      </p>
      <img
        src={imageKris}
        alt="Kris"
        className="border-4 border-rose-200 bg-white rounded-xl shadow-2xl shadow-red-200 fade-in"
      />

      {/* Contenu du Paragraphe */}
      <div
        className="fade-in-container space-y-6 text-justify"
        ref={containerRef}
      >
        <p className="fade-in text-lg leading-relaxed  text-center text-gray-100">
          Dès les premiers battements de mon cœur, un lien sacré s'est tissé
          avec les royaumes invisibles.
        </p>
        <blockquote className="fade-in text-xl font-semibold text-indigo-600 text-center">
          Un fil d’or vibrant, hérité au tréfonds de mes gènes par mon
          arrière-grand-mère, celle qui m'a transmis ses dons de médiumnité et
          son magnétisme singulier.
        </blockquote>
        <p className="text-gray-100 fade-in text-lg leading-relaxed  text-center">
          Très tôt, j’ai perçu les énergies subtiles qui rayonnaient tout autour
          de moi, telles des auréoles invisibles, éveillant en moi une destinée
          particulière.
        </p>
        <p className="text-gray-100 fade-in text-lg leading-relaxed text-center">
          À l’âge de 7 ans, à l’aube de mon innocence, j’ai pris conscience de
          ce lien privilégié avec l’au-delà. Des ressentis profonds et des
          émotions intenses, trop vastes pour que mon jeune être puisse les
          comprendre pleinement.
        </p>
        <p className="text-gray-100 fade-in text-lg leading-relaxed  text-center">
          Aujourd’hui, guidée par les murmures des Anges et des Guides, je vous
          propose un accompagnement holistique unique. Grâce à une approche
          alliant psychologie positive et techniques énergétiques avancées, je
          vous aide à retrouver l’équilibre et à libérer votre plein potentiel.
        </p>
        <blockquote className="fade-in text-xl font-semibold text-indigo-600 pb-7 text-center">
          “Révélez la plénitude de votre être et initiez un processus de
          renaissance vibratoire.”
        </blockquote>
      </div>
    </div>
  );
};

export default Presentation;
