import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { startBulletinSchedule } from "./services/fetchNews.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 7000;

// Start HTTP server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect DB and start bulletin scheduler
connectDB().then(() => {
  startBulletinSchedule();
});
