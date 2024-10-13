import { Router } from "express";
import { generateContent } from "../api/ApiGenerative.js";
import { respuestaPrompt } from "../controllers/generative.controller.js";

const router = Router();
router.post("/coach", respuestaPrompt);

export default router;