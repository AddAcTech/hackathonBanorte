import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import { console } from "inspector";

export const processDocument = async (req, res) => {
    const documentPath = req.body.path
    const processedDocument = await DocumentAI(documentPath)
    console.log(processedDocument)
    const response = await generateContent(processedDocument)

    res.status(200).json({
        message: "Document processed successfully",
        response:  response
    })
};

