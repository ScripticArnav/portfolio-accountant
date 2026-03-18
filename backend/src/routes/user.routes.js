import { Router } from "express";
import { loginUser, registerUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

// Create new user
router.route("/").post(registerUser);
// Login existing user
router.route("/login").post(loginUser);
// Get all users
router.route("/").get(getAllUsers);
// Update or delete specific user
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
