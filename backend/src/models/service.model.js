import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  icon: String,
  details: String,
  featured: { type: Boolean, default: false }
});

export const Service = mongoose.model('Service', serviceSchema);