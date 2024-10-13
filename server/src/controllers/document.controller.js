import DocumentAI from "../api/documentAI.js"; 
import { generateContent } from "../api/ApiGenerative.js";
import { console } from "inspector";

const prederterminado = 'A continuación se muestra un estado de cuenta del cual deberas analizar gastos, (Habla como una conversacion normal y fluida). Estado de cuenta : '
const formato = 'Sigue el siguiente formato. \n' + 'Nombre: \nSaldo inicial \nSaldo final: \nIngresos: \nGastos: \nRendimientos: '
+ '\nPlan de ahorro recomendado: \nObservaciones: (Aquí revisa si tienes gastos innecesarios o si puedes ahorrar más) '
+ '\nMetodos de inversión recomendados: (Investiga instrumentos financieros de inversión recomiendalos.) \n'
export const processDocument = async (req, res) => {
<<<<<<< Updated upstream
    console.log(req.body)
    const {prompt} = req.body
    const response = await generateContent(prompt)
=======
    const documentPath = req.body.path
    const processedDocument = await DocumentAI(documentPath)
    console.log(processedDocument)
    const response = await generateContent(prederterminado + processedDocument + formato)
>>>>>>> Stashed changes

    const processedDocument = DocumentAI()
    res.status(200).json({
        message: "Document processed successfully",
        response:  response
    })
};

