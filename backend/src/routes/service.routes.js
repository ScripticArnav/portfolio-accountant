import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Resolve path to static JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const servicesJsonPath = path.join(__dirname, '../data/services.json');

// Helper to read services from JSON
const readServicesFromFile = () => {
  try {
    const raw = fs.readFileSync(servicesJsonPath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading services.json:', error);
    return [];
  }
};

// GET /services -> static JSON list
router.get('/', (req, res) => {
  const services = readServicesFromFile();
  res.json(services);
});

export default router;