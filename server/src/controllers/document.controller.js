import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import { console } from "inspector";

export const processDocument = async (req, res) => {
    console.log(req.body)
    const {prompt} = req.body
    const response = await generateContent(prompt)

    //const processedDocument = DocumentAI()
    res.status(200).json({
        message: processDocument,
    })
};

