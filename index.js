const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/mongodb');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
app.use('/api/contact', require('./routes/ContactUs.route'));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
