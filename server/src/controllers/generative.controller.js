import { generateContent } from "../api/ApiGenerative.js";


// Conversación de usuario y API de generación de contenido

export const respuestaPrompt = async (req, res) => {
    const prompt = req.body.prompt
    const response = await generateContent(prompt)
    res.status(200).json({
        message: "Content generated successfully",
        response: response
    })
}