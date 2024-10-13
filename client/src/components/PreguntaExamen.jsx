import React from "react";

function PreguntaExamen() {
  return (
    <div>
      <h2 className="font-bold">Pregunta 1</h2>
      <p className="font-semibold">¿Cuál es la capital de México?</p>
      <div className="flex gap-2 justify-center items-center">
        <input type="radio" name="q1" value="a" />
        <label htmlFor="a">Guadalajara</label>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <input type="radio" name="q1" value="a" />
        <label htmlFor="a">Guadalajara</label>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <input type="radio" name="q1" value="a" />
        <label htmlFor="a">Guadalajara</label>
      </div>
    </div>
  );
}

export default PreguntaExamen;
