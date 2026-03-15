import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  message: { type: String, required: true }
}, { timestamps: true });

export const ContactMessage = mongoose.model('ContactMessage', contactSchema);