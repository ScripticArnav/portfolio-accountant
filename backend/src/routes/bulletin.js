import express from "express";
import Bulletin from "../models/Bulletin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Bulletin.find().sort({ date: -1 }).limit(50);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bulletin" });
  }
});

export default router;
