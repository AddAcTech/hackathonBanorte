import { Router } from "express";
import { generateContent } from "../api/ApiGenerative.js";
import { respuestaPrompt } from "../controllers/generative.controller.js";

const router = Router();

router.get("/chat", respuestaPrompt);

export default router;