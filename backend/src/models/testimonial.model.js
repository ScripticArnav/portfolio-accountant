import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
});

export const Testimonial = mongoose.model('Testimonial', testimonialSchema);
