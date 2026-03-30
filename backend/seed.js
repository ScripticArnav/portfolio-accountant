import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/User.js";
import connectDB from "./src/db/index.js";

dotenv.config();

const seedTestUser = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log("✅ Connected to MongoDB");

    // Check if test user already exists
    const existingUser = await User.findOne({ email: "test@gmail.com" });
    if (existingUser) {
      console.log("✅ Test user already exists!");
      console.log("📧 Email: test@gmail.com");
      console.log("🔐 Password: Test@123");
      process.exit(0);
    }

    // Create test user
    const testUser = new User({
      firstName: "Test",
      lastName: "User",
      email: "test@gmail.com",
      password: "Test@123",
      phone: "9999999999",
      company: "Test Company",
      role: "user",
    });

    await testUser.save();
    console.log("✅ Test user created successfully!");
    console.log("📧 Email: test@gmail.com");
    console.log("🔐 Password: Test@123");

    // Create admin user
    const adminUser = new User({
      firstName: "Admin",
      lastName: "User",
      email: "admin@gmail.com",
      password: "Admin@123",
      phone: "8888888888",
      company: "Admin Company",
      role: "admin",
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully!");
    console.log("📧 Email: admin@gmail.com");
    console.log("🔐 Password: Admin@123");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding test user:", error);
    process.exit(1);
  }
};

seedTestUser();
