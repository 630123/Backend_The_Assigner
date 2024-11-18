const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/ContactUs.controller');

router.post('/', createContact);

module.exports = router;
