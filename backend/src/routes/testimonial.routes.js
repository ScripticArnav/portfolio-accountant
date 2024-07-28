import { Router } from "express";
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "../controllers/testimonial.controller";

const router = Router()

router.route("/create").post(createTestimonial)
router.route("/read").post(getTestimonials)
router.route("/update").post(updateTestimonial)
router.route("/delete/:id").post(deleteTestimonial)

export default router