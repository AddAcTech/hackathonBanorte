import React from "react";

function LearningTask() {
  return (
    <div
      name="task"
      className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col gap-2"
    >
      <h2 className="font-bold text-2xl">Nombre del Modulo</h2>
      <p className="max-w-fit">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        dolores veritatis enim perspiciatis nisi nostrum, qui possimus tenetur
        aperiam fugit.
      </p>
      <button className="bg-red-500 rounded-md w-fit px-4">Estudiar</button>
    </div>
  );
}

export default LearningTask;
