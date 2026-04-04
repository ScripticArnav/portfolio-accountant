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
 * Client Login - for regular users/clients
 */
export const clientLogin = async (req, res) => {
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
        message: "Invalid email or password",
      });
    }

    // Check if user is a client (not admin)
    if (user.role !== "user") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Please use the admin login.",
      });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
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
      message: "Login successful",
    });
  } catch (error) {
    console.error("Client login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/**
 * Client Signup - allow new clients to register
 */
export const clientSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, company } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Create new client user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      company,
      role: "user", // Always create as regular user/client
    });

    await user.save();

    // Generate token
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

    return res.status(201).json({
      success: true,
      token,
      user: userData,
      message: "Client registered successfully",
    });
  } catch (error) {
    console.error("Client signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
