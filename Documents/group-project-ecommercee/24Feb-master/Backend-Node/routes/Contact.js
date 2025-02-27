const express = require("express");
const router = express.Router();
const contactController = require('../controller/contactController');

router.post('/contact', contactController.submitContactForm);
router.get('/contact-messages', contactController.getContactMessages);

module.exports = router;