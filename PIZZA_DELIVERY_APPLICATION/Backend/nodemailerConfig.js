const nodemailer = require('nodemailer');


// make a reusable transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
    },
});

module.exports = transporter;