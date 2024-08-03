import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
});

export const Service = mongoose.model('Service', serviceSchema);
