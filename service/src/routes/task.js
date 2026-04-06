import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import { getTask, getOneTask, createTask, updateTask, deleteTask, getTaskHome } from "../controller/task.js";
//import { validateSchema } from "../middlewares/validate.middleware.js";
//import { createTaskSchema, createTaskSchema2 } from "../schema/task.schema.js";

const router = Router();

router.post("/task", authRequired, validateSchema(createTaskSchema), createTask);
router.get("/task", authRequired, getTask);
router.get("/taskhome", authRequired, getTaskHome);
router.get("/task/:id", authRequired, getOneTask);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask);

export default router;