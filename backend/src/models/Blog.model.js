import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: String,
  author: { type: String, default: 'Financial Team' },
  tags: [String],
  image: String,
  category: String
}, { timestamps: true });

export const Blog = mongoose.model('Blog', blogSchema);