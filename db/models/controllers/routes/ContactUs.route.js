const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/ContactUs.controller');

router.post('/', createContact);

module.exports = router;
PORT=5000
DB_URI=mongodb://localhost:27017/contact_us
