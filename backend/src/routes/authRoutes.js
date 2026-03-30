import express from "express";
import { login, signup, getCurrentUser } from "../controllers/authController.js";

const router = express.Router();

// Public routes
router.post("/login", login);
router.post("/signup", signup);

// Protected routes
router.get("/me", getCurrentUser);

export default router;
