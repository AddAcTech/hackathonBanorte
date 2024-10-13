import { Router } from "express";
import { processDocument, pruebaEndpoint } from "../controllers/document.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({storage: multer.memoryStorage()})

router.post("/document", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Convertir el archivo a base64
    const base64Data = req.file.buffer.toString('base64');

    // Imprimir el base64 en consola
    console.log(base64Data);

    // Responder al cliente
    res.send('Archivo recibido y convertido a base64.');
});

export default router;
