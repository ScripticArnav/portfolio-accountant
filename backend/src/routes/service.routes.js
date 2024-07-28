import { Router } from "express";
import { createService, updateService, deleteService, getServices } from "../controllers/service.controller";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/create").post(upload.single('photo') ,createService)
router.route("/read").post(getServices)
router.route("/update").post(updateService)
router.route("/delete/:id").post(deleteService)

export default router