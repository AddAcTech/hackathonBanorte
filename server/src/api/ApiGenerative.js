import {VertexAI} from '@google-cloud/vertexai';
import { setCache, getCache, hasCache, printCache, getAllCacheValues } from '../cache.js';

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'gcp-banorte-hackaton-team-7', location: 'us-central1'});
const model = 'gemini-1.5-flash-002';


// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 1,
    'topP': 0.95,
  },
  safetySettings: [
    {
      'category': 'HARM_CATEGORY_HATE_SPEECH',
      'threshold': 'OFF',
    },
    {
      'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
      'threshold': 'OFF',
    },
    {
      'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      'threshold': 'OFF',
    },
    {
      'category': 'HARM_CATEGORY_HARASSMENT',
      'threshold': 'OFF',
    }
  ],
});
export async function generateContent(prompt) {
  // Verificar si el prompt ya existe en la caché
  if (hasCache(prompt)) {
    console.log('Cache hit');
    return getCache(prompt);
  }

  // Obtener todos los valores de la caché
  const cachedContent = getAllCacheValues() || "";
  // Concatenar el contenido de la caché con el nuevo prompt
  const combinedPrompt = await cachedContent ? `${cachedContent} ${prompt}` : prompt;

  const text1 = {text: combinedPrompt};
  const req = {
    contents: [
      {role: 'user', parts: [text1]}
    ],
  };
  const streamingResp = await generativeModel.generateContentStream(req);

let aggregatedText = '';

for await (const item of streamingResp.stream) {
  aggregatedText += item.candidates[0].content.parts[0].text;
}

// Almacenar la respuesta en la caché con expiración
setCache(prompt, aggregatedText);
printCache();

return aggregatedText;
}
