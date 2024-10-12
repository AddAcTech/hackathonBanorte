import LearningTask from "./LearningTask";
import { useState } from "react";

//TO DO: Renderizar informacion desde la API de openai con la clase

function Learning() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function MarkAsCompleted() {
    setIsTaskCompleted(true);
  }

  return (
    <div className="w-full grid grid-cols-2 h-screen">
      <div name="info" className="w-full flex flex-col items-center p-4 gap-4">
        <div
          name="pdf"
          className="bg-gray-400 w-96 flex-1 rounded-lg flex items-center justify-center "
        >
          PDF
        </div>
        <div name="buttonContainer" className="flex gap-2">
          {isTaskCompleted ? (
            <button
              className="bg-red-500 rounded-md w-fit p-4"
              onClick={MarkAsCompleted}
            >
              Siguiente tarea
            </button>
          ) : (
            <button
              className="bg-red-500 rounded-md w-fit p-4"
              onClick={MarkAsCompleted}
            >
              Marcar como completada
            </button>
          )}
          <button className="bg-red-500 rounded-md w-fit p-4">
            Preguntar a Maya
          </button>
        </div>
      </div>
      <div
        name="sidebar"
        className="w-full flex flex-col items-center justify-center"
      >
        <div
          name="taskcontainer"
          className="w-full flex flex-col items-center gap-4"
        >
          <LearningTask />
          <LearningTask />
          <LearningTask />
          <LearningTask />
        </div>
      </div>
    </div>
  );
}

export default Learning;
