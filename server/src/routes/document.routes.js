import { Router } from "express";
import { processDocument, pruebaEndpoint } from "../controllers/document.controller.js";

const router = Router();

router.post("/document", pruebaEndpoint);

export default router;
