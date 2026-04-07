import mongoose from "mongoose";

const bulletinSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  source: String,
  category: String,
  date: String
});

export default mongoose.model("Bulletin", bulletinSchema);
