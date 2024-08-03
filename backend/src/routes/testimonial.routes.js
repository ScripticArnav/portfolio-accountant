import { Router } from "express";
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "../controllers/testimonial.controller.js";

const router = Router()

router.route("/create").post(createTestimonial)
router.route("/read").get(getTestimonials)
router.route("/update/:id").put(updateTestimonial)
router.route("/delete/:id").delete(deleteTestimonial)

export default router