import { Router } from "express";
import { processDocument } from "../controllers/document.controller.js";

const router = Router();

router.post("/document", processDocument);

export default router;
