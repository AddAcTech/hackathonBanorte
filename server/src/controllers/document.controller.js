import DocumentAI from "../api/documentAI.js";
import { generateContent } from "../api/ApiGenerative.js";
import Blob from "buffer";

export const processDocument = async (req, res) => {
    const document = req.body
    const documentBlob = new Blob("hola", {type: "text/plain"})
    console.log(documentBlob)
    console.log(document)
    // const blobDocument = req.body;
    // const base64Document = Buffer.from(document).toString("base64");
    // console.log(base64Document);
    // const processedDocument = await DocumentAI(base64Document);
    // console.log(processedDocument);
    // const response = await generateContent(processedDocument);

    res.status(200).json({
    message: "Document processed successfully",
    // response: response,
    });
};
