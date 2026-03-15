import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  fileUrl: { type: String, required: true }
});

export const Form = mongoose.model('Form', formSchema);