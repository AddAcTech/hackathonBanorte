import PreguntaExamen from "./PreguntaExamen";
//usar flag para exa

function Examen() {
  return (
    <div className="flex flex-col items-center w-full pt-4">
      <h1 className="title mb-4">Bienvenido a tu examen</h1>
      <div className="flex flex-col gap-4">
        <PreguntaExamen />
        <PreguntaExamen />
        <PreguntaExamen />
      </div>
      <button className="main-button my-4">Enviar respuestas</button>
    </div>
  );
}

export default Examen;
