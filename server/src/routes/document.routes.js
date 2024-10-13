import { Router } from "express";
import { processDocument } from "../controllers/document.controller.js";

const router = Router();

router.get("/document", processDocument);

export default router;
