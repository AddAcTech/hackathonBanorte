import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import { console } from "inspector";

export const processDocument = async (req, res) => {
    const document = req.body
    const processedDocument = await DocumentAI(document)
    console.log(processedDocument)
    const response = await generateContent(processedDocument)

    res.status(200).json({
        message: "Document processed successfully",
        response:  response
    })
};

