import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import serviceRoutes from './routes/service.routes.js';
import blogRoutes from './routes/blog.routes.js';
import formRoutes from './routes/form.routes.js';
import bulletinRoutes from './routes/bulletin.routes.js';
import contactRoutes from './routes/contact.routes.js';
import uploadsRoutes from './routes/uploads.routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// DB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/financialdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/bulletins', bulletinRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/uploads', uploadsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));