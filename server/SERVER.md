# Backend

Este documento contiene el desarrollo completo del backend de nuestra propuesta, que incluye los distintos `endpoints` necesarios para el correcto funcionamiento de la aplicación. Además, se proporcionan las instrucciones detalladas para la correcta ejecución y despliegue del proyecto.

## Instalacion y Ejecucion

1. Tener un proyecto en GCP con Document AI y Vertex AI
2. Instalar GCP CLI
3. Iniciar sesion con las credenciales:
```bash
gcloud auth login
gcloud auth application-default login
```
4. En la ruta `~/server/` ejecutar `npm install`
5. Iniciar el servidor backend con `npm run dev`

## Endpoints

La URL del backend es `localhost:3000/`, este es editable y configurable dentro del proyecto

### /Document

Este `endpoint` se utiliza para extraer información relevante de documentos, específicamente estados de cuenta bancarios. Su función es obtener datos financieros clave del cliente, que son esenciales para el análisis y gestión de sus finanzas.

### Input y Output

| Endpoint | Input | Output |
|----------|----------|----------|
|  POST /Document   | ```{ "body": formData``` }  | ```{ "title": "File uploaded successfully", "consejo": response }```   |

### /Chat

Este `endpoint` se utiliza para enviar un prompt a la API de Vertex AI, la cual, al ser un modelo de lenguaje extenso (LLM), permite procesar y generar respuestas a partir de una cadena de texto enviada como `prompt`.

### Input y Output

| Endpoint | Input | Output |
|----------|----------|----------|
|  POST /Chat   | ```{ "prompt": "Cadena del prompt"``` }  | ```{ "message": "Content generated successfully", "response": response }```   |