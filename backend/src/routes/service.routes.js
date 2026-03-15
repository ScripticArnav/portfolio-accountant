import express from 'express';
import { Service } from '../models/Service.model.js';
const router = express.Router();

// Sample data seeder
router.get('/seed', async (req, res) => {
  await Service.deleteMany({});
  const services = [
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting solutions for your business',
      category: 'accounting',
      icon: '📊',
      details: 'Full accounting services including bookkeeping, financial reporting...',
      featured: true
    },
    {
      title: 'Tax Planning',
      description: 'Expert tax planning and compliance services',
      category: 'tax',
      icon: '💰',
      details: 'Strategic tax planning, compliance, and optimization...',
      featured: true
    }
  ];
  await Service.insertMany(services);
  res.json({ message: 'Services seeded' });
});

router.get('/', async (req, res) => {
  try {
    const services = await Service.find().sort({ featured: -1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;