import mongoose from "mongoose";

const bulletinSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

export const Bulletin = mongoose.model('Bulletin', bulletinSchema);