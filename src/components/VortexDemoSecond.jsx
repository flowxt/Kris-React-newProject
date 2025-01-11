import React from "react";
import { Vortex } from "../components/ui/Vortex"; // Assurez-vous que le chemin est correct

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden bg-gradient-to-r from-purple-100 to-pink-200">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Kris LaVoixDesAnges
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Vous souhaitez vous libérer de vos blocages émotionnels, vous pouvez me contacter en remplissant le forumulaire ci-dessous.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Réserver une séance
          </button>
          <button className="px-4 py-2 text-white">Parlons-en</button>
        </div>
      </Vortex>
    </div>
  );
}