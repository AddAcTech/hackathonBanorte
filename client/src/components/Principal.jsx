import React from "react";
import ProgressBar from "./ProgresBar";

function Principal() {
  // - Debe extraer el progreso realtivo a la meta de ahorro del usuario
  const progress = 50;

  return (
    <div className="mx-auto">
      <main className="my-4">
        <h1 className="title mx-8">Bienvenido User</h1>
        {/* Primer sección */}
        <section className="mb- p-4 mx-4">
          <p className="text-base md:text-lg lg:text-xl">
            Saldo en cuenta: -Extraer informacion de la cuenta del usuario-
          </p>
          <div className="flex items-center text-base md:text-lg lg:text-xl">
            <span>Meta ahorro:</span>
            <div className="ml-4 w-full md:w-1/4">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center sm:flex-row sm:items-stretch h-full">
          <div className="w-11/12 sm:w-1/2 mb-8 p-4 mx-4 flex flex-col cardBorder flex-grow">
            {/* Contenido de la primera sub-sección */}
            <p className="text-center subtitle">Analisis Financiero</p>
            <p className="text-base md:text-lg lg:text-xl">Resumen...</p>
            <p className="text-base md:text-lg lg:text-xl">
              Recomendaciones...
            </p>
            <p className="text-base md:text-lg lg:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dicta quia similique culpa temporibus, quos optio molestiae debitis impedit tempora mollitia soluta animi nisi ea perferendis harum quo sed earum.</p>
            <div className="flex justify-center mt-auto">
              <button className="main-button">Realizar analisis</button>
            </div>
          </div>

          <div className="w-11/12 sm:w-1/2 mb-8 p-4 mx-4 flex flex-col cardBorder flex-grow">
            {/* Contenido adicional */}
            {/* Contenido de la segunda sub-sección */}
            <p className="text-center subtitle">Aprendizaje</p>
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
              <button className="main-button">
                Continuar
              </button>
            </div>
          </div>
        </section>

      </main>
      {/* <footer className="bg-banorte-gray text-white p-4">
        <p className="text-sm md:text-base lg:text-lg">© 2023 Mi Página Web</p>
      </footer> */}
    </div>
  );
}

export default Principal;
