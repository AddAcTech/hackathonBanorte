import DocumentAI from "../api/documentAI.js"; 

export const processDocument = async (req, res) => {
    console.log("hola")
    const processedDocument = DocumentAI()
    res.json({
        message: body,
    })
};