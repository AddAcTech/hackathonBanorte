import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

export default function Chat() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileUrl, setPdfFileUrl] = useState(null); // Para mostrar el PDF
  const [additionalData, setAdditionalData] = useState(""); // Para los datos adicionales
  const [isTextFieldEnabled, setIsTextFieldEnabled] = useState(false); // Controla si el TextField está habilitado

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file); // Guardamos el archivo original
      setPdfFileUrl(URL.createObjectURL(file)); // Creamos la URL para mostrar el PDF
    }
  };

  const handleSubmit = async () => {
    if (!pdfFile) {
      console.log("No file selected");
      return;
    }
    setIsTextFieldEnabled(true)

    // Crear un FormData para enviar el archivo y datos adicionales
    const formData = new FormData();
    formData.append("file", pdfFile); // Archivo PDF
    formData.append("additionalData", additionalData); // Agregar datos adicionales si es necesario

    try {
      const response = await fetch("http://localhost:3000/document", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert(`Título: ${data.title}, Mensaje: ${data.text}`);
        setIsTextFieldEnabled(true); // Habilitar el TextField cuando se envíe el archivo con éxito
      } else {
        console.error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8">
        {pdfFileUrl === null ? (
          <div className="flex flex-col items-center justify-center p-5">
            <label
              htmlFor="pdf-upload"
              className="block text-lg font-medium text-gray-700 mb-3"
            >
              Subir archivo PDF
            </label>
            <div className="flex items-center justify-center">
              <input
                id="pdf-upload"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="pdf-upload"
                className="cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Seleccionar archivo
              </label>
            </div>
          </div>
        ) : (
          <div>
            <iframe
              src={pdfFileUrl}
              width="100%"
              height="500"
              className="mt-4 border rounded-lg"
              title="PDF Viewer"
            />
            <div className="grid md:grid-cols-2">
              <button
                className="bg-gray-500 p-3 uppercase text-white font-bold mt-10 rounded-md m-10"
                onClick={() => {
                  setPdfFile(null);
                  setPdfFileUrl(null);
                  setIsTextFieldEnabled(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-red-500 p-3 uppercase text-white font-bold mt-10 rounded-md m-10"
                onClick={handleSubmit}
              >
                Envíar
              </button>
            </div>
          </div>
        )}

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-6 w-full">
          <h2 className="text-2xl font-bold text-gray-800">Chat</h2>
          
          {/* Texto mostrado antes de la validación */}
          {!isTextFieldEnabled && (
            <p className="text-gray-500">
              Para continuar, sube un archivo PDF y haz clic en "Enviar" para habilitar el chat.
            </p>
          )}
          
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="¿En qué puedo ayudarte?"
              variant="outlined"
              fullWidth
              value={additionalData}
              onChange={(e) => setAdditionalData(e.target.value)}
              disabled={!isTextFieldEnabled} 
            />
          </Box>
        </div>
      </main>
    </>
  );
}
