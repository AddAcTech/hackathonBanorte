import express from "express";
import cors from "cors";
import { clearCache, printCache } from './cache.js';
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import bankStatement from "./routes/document.routes.js";


// Inicializar la caché en 0
clearCache();
printCache();
const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use(bankStatement);

export default app;
