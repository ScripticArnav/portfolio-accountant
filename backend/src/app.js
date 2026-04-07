import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import bulletinRoutes from "./routes/bulletin.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Auth Routes
app.use("/api/auth", authRoutes);

// ✅ Bulletin Routes
app.use("/bulletin", bulletinRoutes);

// ✅ Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// ✅ Mock Services Data
const servicesData = [
  {
    id: 1,
    title: "Tax Planning & Compliance",
    description: "Expert tax strategies and regulatory compliance",
    icon: "📊"
  },
  {
    id: 2,
    title: "Accounting Services",
    description: "Full accounting and bookkeeping solutions",
    icon: "📈"
  },
  {
    id: 3,
    title: "Advisory Services",
    description: "Strategic business advice and consulting",
    icon: "💼"
  },
  {
    id: 4,
    title: "Payroll Management",
    description: "Complete payroll processing and compliance",
    icon: "💰"
  }
];

// ✅ Mock Blogs Data
const blogsData = [
  {
    id: 1,
    title: "Understanding GST in 2024",
    excerpt: "A comprehensive guide to GST compliance",
    image: "https://via.placeholder.com/300x200?text=GST",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Tax Deductions You Shouldn't Miss",
    excerpt: "Maximize your tax benefits with these deductions",
    image: "https://via.placeholder.com/300x200?text=Tax",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Starting a Business: Financial Checklist",
    excerpt: "Essential financial steps for new entrepreneurs",
    image: "https://via.placeholder.com/300x200?text=Business",
    date: "2024-01-05"
  }
];

// ✅ Routes
app.get('/services', (req, res) => {
  res.status(200).json({
    success: true,
    data: servicesData
  });
});

app.get('/blogs', (req, res) => {
  res.status(200).json({
    success: true,
    data: blogsData
  });
});

app.post('/contact', async (req, res) => {
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
      error: error.message
    });
  }
});

export { app };
