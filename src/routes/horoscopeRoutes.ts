import { Router } from "express";
import { getToday, getHistory } from "../controllers/horoscopeController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();
router.get("/today", authenticateToken, getToday);
router.get("/history", authenticateToken, getHistory);

export default router;
