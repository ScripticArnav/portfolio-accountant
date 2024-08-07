import { Router } from "express";
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "../controllers/testimonial.controller.js";

const router = Router()

router.route("/").post(createTestimonial)
router.route("/").get(getTestimonials)
router.route("/:id").put(updateTestimonial)
router.route("/:id").delete(deleteTestimonial)

export default router