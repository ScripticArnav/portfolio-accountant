import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cron from "node-cron";

import bulletinRoutes from "./routes/bulletin.js";
import { fetchAllNews } from "./services/fetchNews.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*",   // sab allow (dev ke liye best)
}));
app.use(express.json());

// ✅ DB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/financialdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/bulletin", bulletinRoutes);

cron.schedule("*/30 * * * *", async () => {
  await fetchAllNews();
});

fetchAllNews();

// ✅ Schema (Form Data Save)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// ✅ ROUTE (Form Submit)
app.post('/contact', async (req, res) => {
  console.log("HIT API 🔥");
  const { name, email, phone, company, service, message } = req.body;

  try {
    // 🔹 Save to DB
    console.log("DATA RECEIVED:", req.body);
    const newContact = new Contact({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    await newContact.save();

    // 🔹 Email setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Form submitted & email sent',
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
});



// ✅ Server Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
