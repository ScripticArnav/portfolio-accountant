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
import userRoute from "./routes/user.routes.js"
import testimonialRoute from "./routes/testimonial.routes.js"
import serviceRoute from "./routes/service.routes.js"

// routes
app.use("/api/vi/healthcheck", healthcheckRoute)
app.use("/api/vi/userAuth", userRoute)
app.use("/api/vi/services", serviceRoute)
app.use("/api/vi/testimonials", testimonialRoute)

export default app;
