import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import {promises as fs} from 'fs'

export const processDocument = async (req, res) => {
    const document = req.body
    console.log(typeof(document))
    const processedDocument = await DocumentAI(document)
    const response = await generateContent(processedDocument)

    res.status(200).json({
        message: "Document received" ,
        response:  response
    })
};

