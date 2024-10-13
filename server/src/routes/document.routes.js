import { Router } from "express";
import { processDocument } from "../controllers/document.controller.js";
import { respuestaPrompt } from "../controllers/generative.controller.js";

const router = Router();

router.get("/document", processDocument);
router.post("/document", respuestaPrompt);

export default router;
