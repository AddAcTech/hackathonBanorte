import React from "react";
// import racticons from "react-icons/fa";

function Principal() {
  return (
    <div className="mx-auto">
      <header className="bg-banorte-red text-white p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Bienvenido User</h1>
      </header>
      <main className="my-8">
        <p className="text-base md:text-lg lg:text-xl">Este es el contenido principal de la página.</p>
      </main>
      <footer className="bg-banorte-gray text-white p-4">
        <p className="text-sm md:text-base lg:text-lg">© 2023 Mi Página Web</p>
      </footer>
    </div>
  );
}

export default Principal;