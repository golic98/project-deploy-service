import express from "express";
import "dotenv/config";
import mainRouter from "./src/routes/route.main.js";
import { connectiondb } from "./src/config/dbConnection.js";
import cookieParser from "cookie-parser";
import taskRoute from "./src/routes/route.task.js";
import cors from "cors";
import vigilantRoute from "./src/routes/route.vigilant.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./src/config/swagger.js";
import { errorHandler } from "./src/middlewares/error.handler.js";

const app = express();

connectiondb();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", mainRouter);
app.use("/api", taskRoute);
app.use("/api", vigilantRoute);

app.use(errorHandler);

app.get("/", (_req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>API desplegada</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .card {
          background: rgba(255,255,255,0.08);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          max-width: 500px;
        }
        h1 {
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        p {
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }
        a {
          color: #38bdf8;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 API funcionando correctamente</h1>
        <p>Tu backend está desplegado en Vercel 🎉</p>
        <p>📘 Documentación: <a href="/api-docs">/api-docs</a></p>
        <p>🔗 Endpoints disponibles en <b>/api</b></p>
      </div>
    </body>
    </html>
  `);
});

export default app;