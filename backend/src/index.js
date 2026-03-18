import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 7000;

// Start HTTP server regardless of DB status so JSON-based routes keep working
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Try to connect DB in background (optional for services JSON route)
connectDB();
