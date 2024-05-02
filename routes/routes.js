const express = require('express');
const ContactController = require('../controller/ContactController');

const contactController = new ContactController();

const router = express.Router();

router.use('/contact', contactController.router);

module.exports = router;
