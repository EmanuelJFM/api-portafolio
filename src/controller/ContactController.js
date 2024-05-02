const express = require('express');
const ContactServices = require('../services/ContactServices')

const contactServices = new  ContactServices();
class ContactController {
    constructor() {
        this.contactServices = contactServices;
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/send-email', (req, res) => this.sendEmail(req, res));
    }

    sendEmail(req, res) {
        this.contactServices.sendEmail(req.body)
            .then(message => res.send({ message }))
            .catch(error => res.status(500).send({ error: error.message }));
    }
}

module.exports = ContactController;
