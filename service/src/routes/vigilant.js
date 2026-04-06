import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import { createSchedule, getAllSchedules } from "../controller/vigilant.js";

const router = Router();

router.post("/schedules", authRequired, createSchedule);
router.get("/schedules", authRequired, getAllSchedules);

export default router;
