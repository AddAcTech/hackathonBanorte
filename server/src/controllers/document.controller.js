import DocumentAI from "../api/documentAI.js"; 

export const processDocument = async (req, res) => {
    const processedDocument = await DocumentAI()
    res.status(200).json({
        message: processedDocument,
    })
};