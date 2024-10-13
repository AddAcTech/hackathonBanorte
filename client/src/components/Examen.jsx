import PreguntaExamen from "./PreguntaExamen";
//usar flag para exa

function Examen() {
  return (
    <div className="flex flex-col items-center w-full bg-slate-400 pt-4">
      <h1 className="title mb-2">Bienvenido a tu examen</h1>
      <div className="flex flex-col gap-1">
        <PreguntaExamen />
        <PreguntaExamen />
        <PreguntaExamen />
      </div>
      <button className="main-button my-4">Enviar respuestas</button>
    </div>
  );
}

export default Examen;
