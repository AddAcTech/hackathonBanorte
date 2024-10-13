import DocumentAI from "../api/documentAI.js";
import { generateContent } from "../api/ApiGenerative.js";

export const processDocument = async (req, res) => {
  const blobDocument = req.body;
  const base64Document = Buffer.from(blobDocument).toString("base64");
  console.log(base64Document);
  //   const processedDocument = await DocumentAI(base64Document);
  //   console.log(processedDocument);
  //   const response = await generateContent(processedDocument);

  res.status(200).json({
    message: "Document processed successfully",
    // response: response,
  });
};

export const pruebaEndpoint = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Convertir el archivo a base64
    const base64Data = req.file.buffer.toString('base64');

    // Imprimir el base64 en consola
    console.log(base64Data);

    // Responder al cliente
    res.send('Archivo recibido y convertido a base64.');
}
