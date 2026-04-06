import { Router } from "express";
import { createVisit, getAllVisits } from "../controller/visit";

const router = Router();

router.post("/visit", authRequired, createVisit);
router.get("/visits", authRequired, getAllVisits);

export default router;