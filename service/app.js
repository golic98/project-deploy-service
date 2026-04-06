import 'dotenv/config';
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./src/routes/user.js";
import taskRouter from "./src/routes/task.js";
import visitRouter from "./src/routes/visit.js";
import tasktwoRouter from "./src/routes/task.two.js";
import vigilantRouter from "./src/routes/vigilant.js";
import payvigilanceRouter from "./src/routes/pay.vigilance.js";
import { connectiondb } from "./src/configuration/dbConnection.js";

const app = express();

connectiondb();

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", userRouter);
app.use("/api", taskRouter);
app.use("/api", tasktwoRouter);
app.use("/api", visitRouter);
app.use("/api", vigilantRouter);
app.use("/api", payvigilanceRouter);