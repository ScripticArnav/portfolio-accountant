import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import healthcheckRoute from "./routes/healthCheck.routes.js"
import userRoute from "./routes/user.routes.js"
import testimonialRoute from "./routes/testimonial.routes.js"
import serviceRoute from "./routes/service.routes.js"

// routes
app.use("/api/v1/healthcheck", healthcheckRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/services", serviceRoute)
app.use("/api/v1/testimonials", testimonialRoute)

export { app };
