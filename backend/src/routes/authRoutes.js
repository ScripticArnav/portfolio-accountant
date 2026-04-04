import express from "express";
import { clientLogin, clientSignup } from "../controllers/clientAuthController.js";
import { adminLogin } from "../controllers/adminAuthController.js";
import { verifyToken, verifyAdminToken } from "../middleware/auth.js";

const router = express.Router();

// Client routes
router.post("/client/login", clientLogin);
router.post("/client/signup", clientSignup);

// Admin routes (login only - no signup)
router.post("/admin/login", adminLogin);

// Protected routes
router.get("/me", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const User = (await import("../models/User.js")).default;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        company: user.company,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
