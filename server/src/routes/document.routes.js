import { response, Router } from "express";
import multer from "multer";
import path from "path";
import { promises as fs } from "fs";
import DocumentAI from "../api/documentAI.js";
import { generateContent } from "../api/ApiGenerative.js";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  }
});

const upload = multer({ storage: storage });

router.post("/document", upload.single("file"), async (req, res) => {
  // No need for fs.readFile here as Multer already handles file storage
  // Access the uploaded file details from req.file

  if (req.file) {
    const path = "D:/Hackathon/server/uploads/"+req.file.filename
    const prederterminado = 'A continuación se muestra un estado de cuenta del cual deberas analizar gastos, (Habla como una conversacion normal y fluida). Estado de cuenta : '
    const formato = 'Sigue el siguiente formato. \n' + 'Nombre: \nSaldo inicial \nSaldo final: \nIngresos: \nGastos: \nRendimientos: '
    + '\nPlan de ahorro recomendado: \nObservaciones: (Aquí revisa si tienes gastos innecesarios o si puedes ahorrar más) '
    + '\nMetodos de inversión recomendados: (Investiga instrumentos financieros de inversión recomiendalos.) \n'
    const processedDocument = await DocumentAI(path)
    const response = await generateContent(prederterminado + processedDocument + formato)
    console.log(response)

    try {
      res.status(200).json({
        title: "File uploaded successfully",
        consejo: response
    });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ message: "Error uploading file" });
    }
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
});

export default router;