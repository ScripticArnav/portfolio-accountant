import { Router } from "express";
<<<<<<< HEAD
import { registerUser, loginUser } from "../controllers/user.controller.js";
=======
import { loginUser, registerUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.controller.js";
>>>>>>> cb276c00e92d53dc8894ad4697c93fe090a84959

const router = Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(getAllUsers);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
