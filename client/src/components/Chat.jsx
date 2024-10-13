import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { Button } from "@headlessui/react";

export default function Chat() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileUrl, setPdfFileUrl] = useState(null); // Para mostrar el PDF
  const [chat, setChat] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file); // Guardamos el archivo original
      setPdfFileUrl(URL.createObjectURL(file)); // Creamos la URL para mostrar el PDF
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Usamos el archivo original
      reader.onload = () => resolve(reader.result.split(",")[1]); // Solo la parte base64
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    if (!pdfFile) {
      console.log('No file selected');
      return;
    }

    try {
      const base64File = await convertToBase64(pdfFile);

      const response = await fetch("http://localhost:3000/document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: base64File, // Enviar el archivo en base64
      });

      const data = await response.json();
      console.log(data); // Manejar la respuesta del servidor
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8">
        {pdfFileUrl === null ? ( // Mostramos el PDF usando la URL
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
                className="bg-banorte-gray p-3 uppercase text-white font-bold mt-10 rounded-md m-10"
                onClick={() => {
                  setPdfFile(null);
                  setPdfFileUrl(null);
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-banorte-red p-3 uppercase text-white font-bold mt-10 rounded-md m-10"
                onClick={handleSubmit}
              >
                Envíar
              </button>
            </div>
          </div>
        )}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-6 max-w-lg md:max-w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">Chat</h2>
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="¿De que manera te puedo ayudar?"
              variant="outlined"
              sx={{ width: "65ch" }}
            />
          </Box>
        </div>
      </main>
    </>
  );
}
