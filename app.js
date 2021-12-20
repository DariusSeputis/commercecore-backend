import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';

import { paymentValidationSchema } from './validation/paymentValidation.js';

const products = fs.readFileSync('./product.json');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// -- Validation
const validation = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Starting server
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

// ROUTES
// - GET
// -- get all products
app.get('/api/products', (req, res) => {
  res.status(200).send(products);
});
// - POST
app.post('/api/import', validation(paymentValidationSchema), (req, res) => {
  res.status(200).json({ message: 'payment successful' });
});
