import { Router } from "express";
import { loginUser, registerUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(getAllUsers);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;