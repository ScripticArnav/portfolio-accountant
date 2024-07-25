import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("publlic"));

//import routes
import healthcheckRoute from "./routes/healthCheck.routes.js"

// routes
app.use("/api/vi/healthcheck", healthcheckRoute)


export default app;
