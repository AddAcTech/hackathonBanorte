import DocumentAI from "../api/documentAI.js";
import { generateContent } from "../api/ApiGenerative.js";

export const processDocument = async (req, res) => {
  const blobDocument = req.body;
  const base64Document = Buffer.from(blobDocument).toString("base64");
  console.log(base64Document);
  //   const processedDocument = await DocumentAI(base64Document);
  //   console.log(processedDocument);
  //   const response = await generateContent(processedDocument);

  res.status(200).json({
    message: "Document processed successfully",
    // response: response,
  });
};
