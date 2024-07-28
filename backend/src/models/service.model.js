import mongoose from "mongoose";
f
const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

export const Service = mongoose.model('Service', serviceSchema);
