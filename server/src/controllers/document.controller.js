import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import { console } from "inspector";

export const processDocument = async (req, res) => {
    console.log(generateContent())
    console.log("hola")
    const processedDocument = DocumentAI()
    res.json({
        message: body,
    })
};

