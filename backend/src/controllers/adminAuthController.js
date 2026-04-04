import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.ACCESS_TOKEN_SECRET || "your_jwt_secret_key",
    { expiresIn: "7d" }
  );
};

/**
 * Admin Login - ONLY for pre-existing admin accounts
 * No admin signup is allowed - admins must be created by system
 */
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user and include password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Admin credentials not found",
      });
    }

    // Verify user is an admin
    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized as an admin.",
      });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token with admin role
    const token = generateToken(user._id, user.role);

    // Get user data without password
    const userData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      phone: user.phone,
      company: user.company,
    };

    return res.status(200).json({
      success: true,
      token,
      user: userData,
      message: "Admin login successful",
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
