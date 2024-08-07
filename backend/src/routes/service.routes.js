import { Router } from "express";
import { createService, updateService, deleteService, getServices } from "../controllers/service.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/").post(upload.single('photo'), createService)
router.route("/").get(getServices)
router.route("/:serviceId").put(updateService)
router.route("/:serviceId").delete(deleteService)

export default router