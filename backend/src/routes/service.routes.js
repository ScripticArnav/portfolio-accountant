import { Router } from "express";
import { createService, updateService, deleteService, getServices } from "../controllers/service.controller";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/create").post(upload.single('photo') ,createService)
router.route("/read").get(getServices)
router.route("/update/:serviceId").put(updateService)
router.route("/delete/:serviceId").delete(deleteService)

export default router