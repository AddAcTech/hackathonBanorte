import React from "react";
import ProgressBar from "./ProgresBar";

function Principal() {
  // - Debe extraer el progreso realtivo a la meta de ahorro del usuario
  const progress = 50;

  return (
    <div className="mx-auto">
      <header className="bg-banorte-red text-white p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Bienvenido User</h1>
      </header>
      <main className="my-4">
        {/* Primer sección */}
        <section className="mb- p-4 mx-4">
          <p className="text-base md:text-lg lg:text-xl">Saldo en cuenta: -Extraer informacion de la cuenta del usuario-</p>
          <div className="flex items-center text-base md:text-lg lg:text-xl">
            <span>Meta ahorro:</span>
              <div className="ml-4 w-full md:w-1/4">
                <ProgressBar progress={progress} />
              </div>
          </div>
        </section>
        {/* Segunda sección */}
        {/* Debe ser divido en dos secciones de forma horizontal */}
        <section className="flex">
          <div className="w-1/2 mb-8 p-4 mx-4 flex flex-col shadow-custom">
            {/* Contenido de la primera sub-sección */}
            <p className="text-center">Analisis Financiero</p>
            <p className="text-base md:text-lg lg:text-xl">Resumen...</p>
            <p className="text-base md:text-lg lg:text-xl">Recomendaciones...</p>
            <p className="text-base md:text-lg lg:text-xl">Otra info</p>
            <div className="flex justify-center mt-auto">
              <button className="bg-banorte-red text-white p-2 rounded-lg mt-4">Realizar analisis</button>
            </div>
          </div>
          <div className="w-1/2 mb-8 p-4 mx-4 flex flex-col shadow-custom">
            {/* Contenido de la segunda sub-sección */}
            <p className="text-center">Aprendizaje</p>
            <div className="flex items-center my-4 mx-20 mb-8 border border-banorte-gray p-4">
              {/* Contenido de la clase actual */}
              <p>Clase</p>
            </div>
            <div className="flex items-center text-base md:text-lg lg:text-xl">
              <span>Progreso curso:</span>
              <div className="ml-4 w-full md:w-1/4">
                <ProgressBar progress={progress} />
              </div>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="bg-banorte-red text-white p-2 rounded-lg mt-4">Continuar</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-banorte-gray text-white p-4">
        <p className="text-sm md:text-base lg:text-lg">© 2023 Mi Página Web</p>
      </footer>
    </div>
  );
}

export default Principal;