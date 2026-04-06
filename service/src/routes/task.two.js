import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import { getTask2, getOneTask2, createTask2, updateTask2, deleteTask2, getTaskHome2 } from "../controller/task.two.js";
//import { validateSchema } from "../middlewares/validate.middleware.js";
//import { createTaskSchema, createTaskSchema2 } from "../schema/task.schema.js";

const router = Router();

router.post("/taskd", authRequired, validateSchema(createTaskSchema2), createTask2);
router.get("/taskd", authRequired, getTask2);
router.get("/taskhomed", authRequired, getTaskHome2);
router.get("/taskd/:id", authRequired, getOneTask2);
router.delete("/taskd/:id", authRequired, deleteTask2);
router.put("/taskd/:id", authRequired, updateTask2);

export default router;