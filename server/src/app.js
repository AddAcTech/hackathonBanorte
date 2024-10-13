import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import bankStatement from "./routes/document.routes.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use(bankStatement);

export default app;
