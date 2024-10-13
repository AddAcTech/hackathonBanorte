import { useState } from "react";
import { TextField, Box } from "@mui/material";
import Loading from "./Loading"; // Componente del spinner

export default function Chat() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileUrl, setPdfFileUrl] = useState(null);
  const [additionalData, setAdditionalData] = useState("");
  const [serverResponse, setServerResponse] = useState(null); // Estado para almacenar la respuesta del servidor
  const [loading, setLoading] = useState(false); // Estado para mostrar el spinner

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true); // Mostramos el spinner cuando se selecciona el archivo
      setTimeout(() => {
        setPdfFile(file);
        setPdfFileUrl(URL.createObjectURL(file)); // Creamos la URL del PDF
        setLoading(false); // Ocultamos el spinner cuando ya tenemos la URL
      }, 1000); // Simulamos un pequeño retardo (1 segundo) para mostrar el spinner
    }
  };

  const handleSubmit = async () => {
    if (!pdfFile) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);

    setLoading(true); // Activamos el spinner al iniciar la petición al servidor

    try {
      const response = await fetch("http://localhost:3000/document", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setServerResponse(data.consejo.toString());
      } else {
        console.error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
    } finally {
      setLoading(false); // Ocultamos el spinner cuando termina la petición
    }
  };

  const handleChatSubmit = async () => {
    if (additionalData === "") {
      console.log("No data to send");
      return;
    }

    const requestBody = {
      prompt: additionalData,
    };

    setLoading(true); // Activamos el spinner al iniciar la petición al servidor

    try {
      const response = await fetch("http://localhost:3000/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setServerResponse(data.response); // Guardamos el valor de 'response'
        console.log(data);
      } else {
        console.error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
    } finally {
      setLoading(false); // Ocultamos el spinner cuando termina la petición
    }
  };

  return (
    <div className="flex items-center justify-center">
      <main className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {pdfFileUrl === null ? (
          <div className="flex flex-col items-center justify-center p-5 " style={{height:'calc(100vh - 80px)'}}>
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

            {/* Mostramos el spinner si loading es true */}
            {loading && (
              <div className="mt-4">
                <Loading />
                <p className="text-gray-500 mt-2">Cargando archivo...</p>
              </div>
            )}
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
                className="bg-gray-500 p-3 uppercase text-white font-bold rounded-md m-5"
                onClick={() => {
                  setPdfFile(null);
                  setPdfFileUrl(null);
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-red-500 p-3 uppercase text-white font-bold rounded-md m-5"
                onClick={handleSubmit}
                disabled={loading} // Deshabilitamos el botón mientras esperamos la respuesta
              >
                {loading ? <Loading /> : "Enviar"} {/* Mostramos el spinner si loading está activo */}
              </button>
            </div>
          </div>
        )}

        {pdfFileUrl === null ? (
          <div className="flex flex-col items-center justify-center p-5 " style={{height:'calc(100vh - 80px)'}}>
            <div className="p-5 rounded-lg space-y-6 md:max-w-full max-w-full">
              <h2 className="text-2xl font-bold text-gray-800">Chat</h2>
              <p>Es necesario subir un PDF para recibir una respuesta</p>
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-lg space-y-6 md:max-w-full m-auto">
            <h2 className="text-2xl font-bold text-gray-800">Chat</h2>
            <div className="overflow-y-scroll h-96 ">
              {serverResponse && (
                <div className="mt-4 p-3 border border-green-300 bg-green-100 rounded-md">
                  {/* <h3 className="font-bold">Respuesta del servidor:</h3> */}
                  <p>{serverResponse}</p>
                </div>
              )}
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
              </Box>
            </div>
            <div className="flex items-center justify-between gap-4">
              <TextField
                id="outlined-basic"
                label="¿En qué puedo ayudarte?"
                variant="outlined"
                sx={{ width: "100%" }}
                value={additionalData}
                onChange={(e) => setAdditionalData(e.target.value)}
              />
              <button
                className="main-button"
                onClick={handleChatSubmit}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
