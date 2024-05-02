const nodemailer = require('nodemailer');
const Contact = require('../model/Contact');

class ContactServices {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'eferminmarin@gmail.com',
                pass: 'rdgh vbmm excm rwtm'
            }
        });
    }

    async sendEmail(contactData) {
        const contact = new Contact(contactData.name,contactData.email, contactData.subject, contactData.content);

        const mailOptions = {
            from: contact.getEmail(),
            to: 'eferminmarin@gmail.com',
            subject: contact.getSubject(),
            text: `Tienes un mensaje de: ${contact.getName()}\n\n ${contact.getEmail()}\n\n${contact.getContent()}`
        };

        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Email enviado: ' + info.response);
                    resolve('Email enviado: ' + info.response);
                }
            });
        });
    }
}

module.exports = ContactServices;
