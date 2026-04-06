import { Router } from "express";
//import { authRequired } from "../middlewares/validate.token.js";
import { addPayVigilance, getAllPay } from "../controller/pay.vigilance.js";

const router = Router();

router.post("/payVigilance", authRequired, addPayVigilance);
router.get("/allPay", authRequired, getAllPay);